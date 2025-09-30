import React, { useState } from 'react';
import { Store, Phone, MapPin, Clock, Bell, Leaf, Star } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Store className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Daveens</h1>
                <p className="text-xs text-gray-600 -mt-1">African Food & Grocery</p>
              </div>
            </div>
            <a href="tel:3125811279" className="text-red-600 font-semibold text-sm hover:text-red-700">
              (312) 581-1279
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-8 border-2 border-red-200">
              COMING SOON
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              The Same Taste<br />
              <span className="text-red-600">You Trust.</span><br />
              Now at Your Fingertips.
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
              For years, you've come to us for authentic African ingredients. Now we're bringing our store to you. Online ordering with pickup at our Chicago location.
            </p>

            <div className="bg-white rounded-xl shadow-xl p-8 mb-16 max-w-lg mx-auto border-t-4 border-red-600">
              <div className="mb-6">
                <Bell className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Be the First to Know</h3>
                <p className="text-gray-600">
                  Sign up and we'll email you the moment our online store goes live.
                </p>
              </div>
            
              {!isSubscribed ? (
                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg"
                  >
                    NOTIFY ME
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                  <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <p className="text-green-900 font-bold text-lg mb-1">You're on the list!</p>
                  <p className="text-green-700">We'll email you when we launch.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What's Coming */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Coming</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Browse Our Full Inventory</h4>
              <p className="text-gray-600">
                Every product we carry in-store, searchable and organized online. From palm oil to plantain flour to your favorite seasonings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Order When You Want</h4>
              <p className="text-gray-600">
                Place your order anytime, day or night. Pick up during our regular hours at your convenience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Same Quality Promise</h4>
              <p className="text-gray-600">
                The same fresh produce and authentic products you've trusted for years, now way easier to get.
              </p>
            </div>
          </div>
        </div>

        {/* Store Info */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Meanwhile, We're Open</h3>
            <p className="text-gray-300 text-lg">
              Visit us at our South Side Chicago location for all your African grocery needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Location</h4>
              <p className="text-gray-300 leading-relaxed">
                6421 S King Dr Ste B<br />
                Chicago, IL 60637
              </p>
            </div>
            
            <div>
              <Phone className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Call Us</h4>
              <a href="tel:3125811279" className="text-gray-300 hover:text-white transition-colors">
                (312) 581-1279
              </a>
            </div>
            
            <div>
              <Clock className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Store Hours</h4>
              <p className="text-gray-300">
                Mon-Sat: 9AM-8PM<br />
                Sunday: 10AM-6PM
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16 border-t-4 border-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-red-600 p-2 rounded-lg mr-3">
              <Store className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold block">Daveens</span>
              <span className="text-xs text-gray-400">African Food & Grocery</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">
            Serving Chicago's South Side since 2020
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 Daveens African Food and Grocery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;