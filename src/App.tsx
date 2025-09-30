import React, { useState } from 'react';
import { Store, Mail, Phone, MapPin, Clock, Bell, ChefHat, Leaf, Star } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-1 py-4">
          <div className="flex items-left justify-left">
            <div className="flex items-left space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-orange-500 p-2 rounded-full">
                <Store className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Daveens African Food and Grocery</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* Hero Image */}
          <div className="mb-8">
            <img 
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
              alt="African spices and ingredients" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl object-cover h-64 md:h-80"
            />
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-green-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
            <Clock className="h-4 w-4 text-orange-600 mr-2" />
            <span className="text-sm font-medium text-orange-800">Coming Soon</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Your Favorite African Grocery Store,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Now Online!
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're building something amazing! Soon you'll be able to shop all your favorite African groceries, 
            spices, and specialty items from the comfort of your home with convenient pickup options.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-md mx-auto border border-green-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-orange-400 p-3 rounded-full">
                <Bell className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Notified First!</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Be the first to know when we launch and get exclusive early access deals.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-orange-500 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-green-800 font-medium">Thank you for subscribing!</p>
                <p className="text-green-600 text-sm">We'll notify you as soon as we launch.</p>
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Fresh African vegetables and produce" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold mb-1">Fresh Produce</h4>
                <p className="text-sm opacity-90">Farm-fresh vegetables and fruits</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="African spices and seasonings" 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold mb-1">Authentic Spices</h4>
                <p className="text-sm opacity-90">Premium African seasonings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
            <div className="mb-4">
              <img 
                src="https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                alt="African grocery products" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <ChefHat className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Authentic African Products</h3>
            <p className="text-gray-600 text-sm">
              Premium quality spices, grains, oils, and specialty items sourced directly from Africa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100">
            <div className="mb-4">
              <img 
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                alt="Online shopping convenience" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
              <Store className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Convenient Shopping</h3>
            <p className="text-gray-600 text-sm">
              Easy online ordering with flexible pickup options to fit your schedule.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
            <div className="mb-4">
              <img 
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                alt="Fresh quality ingredients" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh & Quality</h3>
            <p className="text-gray-600 text-sm">
              Same fresh, high-quality products you love from our physical store, delivered fresh.
            </p>
          </div>
        </div>

        {/* Store Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
          <div className="mb-6">
            <img 
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
              alt="Daveens African Grocery Store front" 
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Visit Our Physical Store</h3>
            <p className="text-gray-600">
              While we're building your online experience, visit us in person for all your African grocery needs!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
              <p className="text-sm text-gray-600">
                6421 S King<br />
                Dr Ste B<br />
                Chicago, IL 60637
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
              <p className="text-sm text-gray-600">
                (312) 581-1279
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
              <p className="text-sm text-gray-600">
                Mon-Sat: 9AM-8PM<br />
                Sun: 10AM-6PM
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-left">
          <div className="flex items-left justify-left mb-4">
            <div className="bg-gradient-to-r from-green-500 to-orange-400 p-2 rounded-full mr-3">
              <Store className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Daveens African Food and Grocery</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Bringing authentic African flavors to your table since 2020
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