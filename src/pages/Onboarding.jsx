import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key, Loader2, AlertCircle } from 'lucide-react';
import { isExpired, formatTimeRemaining } from '../utils/hashUtils';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Onboarding() {
  const [hashKey, setHashKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateKey = async () => {
    setError('');
    setIsValidating(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/hash-keys/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hashKey }),
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid hash key');
      }

      const { expiresAt } = await response.json();

      if (isExpired(expiresAt)) {
        throw new Error(`This hash key has expired. ${formatTimeRemaining(expiresAt)}`);
      }

      // If validation successful, redirect to registration with a temporary token
      const { token } = await response.json();
      
      // Store registration token in sessionStorage (will be cleared after registration)
      sessionStorage.setItem('registrationToken', token);
      
      navigate('/register', { 
        state: { 
          verified: true,
          hashKey 
        },
        replace: true // Replace history so user can't go back to this page
      });

    } catch (err) {
      setError(err.message || 'Failed to validate hash key');
      console.error('Validation error:', err);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateKey();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Welcome to Combat Coin
          </h1>
          <p className="text-xl text-gray-300">
            Enter your hash key to begin registration
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="hashKey" className="block text-sm font-medium mb-2">
                Hash Key
              </label>
              <div className="relative">
                <input
                  id="hashKey"
                  type="text"
                  value={hashKey}
                  onChange={(e) => setHashKey(e.target.value.toUpperCase())}
                  placeholder="Enter your hash key"
                  className="w-full bg-white/5 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={isValidating}
                />
                <Key className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-500/10 rounded-lg px-4 py-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isValidating || !hashKey}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg 
                hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isValidating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Validating...
                </>
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have a hash key?{' '}
              <a 
                href="/contact" 
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}