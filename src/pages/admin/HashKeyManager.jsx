import React, { useState, useEffect } from 'react';
import { Copy, Trash2, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useAdmin } from '../../utils/adminContext';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Wrap component with admin protection
function HashKeyManager() {
  const [hashKeys, setHashKeys] = useState([]);
  const [expirationHours, setExpirationHours] = useState(24);
  const [prefix, setPrefix] = useState('CC');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedKey, setCopiedKey] = useState(null);
  const [error, setError] = useState('');

  const fetchHashKeys = async () => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/hash-keys`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch hash keys');
      }

      const data = await response.json();
      setHashKeys(data.hashKeys);
    } catch (err) {
      setError('Failed to load hash keys');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHashKeys();
  }, []);

  const generateNewKey = async () => {
    setIsGenerating(true);
    setError('');

    try {
      const token = sessionStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/hash-keys`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prefix,
          expirationHours: parseInt(expirationHours),
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to generate hash key');
      }

      const newKey = await response.json();
      setHashKeys(prev => [newKey, ...prev]);
    } catch (err) {
      setError('Failed to generate hash key');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const deleteKey = async (keyToDelete) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/hash-keys/${keyToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to delete hash key');
      }

      setHashKeys(prev => prev.filter(k => k.key !== keyToDelete));
    } catch (err) {
      setError('Failed to delete hash key');
      console.error('Delete error:', err);
    }
  };

  const copyToClipboard = async (key) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
      console.error('Copy error:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Hash Key Manager
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Generate and manage onboarding hash keys for new users.
          </p>
        </div>

        {error && (
          <div className="mb-8 flex items-center gap-2 text-red-500 bg-red-500/10 rounded-lg px-4 py-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {/* Generator Controls */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Generate New Key</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Prefix
              </label>
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value.toUpperCase())}
                maxLength="4"
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Expiration (hours)
              </label>
              <input
                type="number"
                value={expirationHours}
                onChange={(e) => setExpirationHours(e.target.value)}
                min="1"
                max="168"
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="sm:col-span-2 flex items-end">
              <button
                onClick={generateNewKey}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg 
                  hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Hash Key'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hash Keys List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Generated Keys</h2>
          <div className="space-y-4">
            {hashKeys.length === 0 ? (
              <p className="text-gray-400 text-center py-8">
                No hash keys generated yet. Use the form above to create new keys.
              </p>
            ) : (
              hashKeys.map((keyData) => (
                <div 
                  key={keyData.key}
                  className={`
                    bg-white/5 rounded-lg p-4 flex items-center justify-between
                    ${keyData.isExpired ? 'opacity-50' : ''}
                  `}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-mono text-orange-500 truncate">
                        {keyData.key}
                      </p>
                      {keyData.isExpired && (
                        <span className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          Expired
                        </span>
                      )}
                      {keyData.used && (
                        <span className="flex items-center gap-1 text-green-500 text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          Used
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      Expires: {new Date(keyData.expiresAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <button
                      onClick={() => copyToClipboard(keyData.key)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-5 h-5" />
                      {copiedKey === keyData.key && (
                        <span className="absolute bg-black text-white text-xs px-2 py-1 rounded -mt-8 -ml-4">
                          Copied!
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => deleteKey(keyData.key)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      title="Delete key"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export with admin protection
export default function ProtectedHashKeyManager() {
  const { requireAdmin } = useAdmin();
  return requireAdmin(HashKeyManager)();
}