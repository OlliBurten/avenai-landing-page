'use client'

import { useState, useEffect } from 'react'
import { 
  SparklesIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UsersIcon,
  CheckIcon,
  PlayIcon,
  CodeBracketIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function MarketingLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'API Documentation Upload',
      description: 'Simply upload your API docs and Avenai instantly becomes an expert on your entire API.',
      color: 'text-blue-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '24/7 AI Support',
      description: 'Your customers get instant answers to API questions, error debugging, and code examples.',
      color: 'text-blue-600'
    },
    {
      icon: CodeBracketIcon,
      title: 'Error Code Debugging',
      description: 'Customers paste error codes and get instant solutions with step-by-step guidance.',
      color: 'text-blue-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Branded Customer Portal',
      description: 'Seamlessly integrate Avenai into your existing customer dashboard with your branding.',
      color: 'text-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Integration Analytics',
      description: 'Track integration success rates, support ticket reduction, and customer satisfaction.',
      color: 'text-blue-600'
    },
    {
      icon: UsersIcon,
      title: 'Multi-tenant Support',
      description: 'Serve multiple customer organizations with isolated, secure environments.',
      color: 'text-blue-600'
    }
  ]

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Save $50K+ Annually',
      description: 'Reduce support costs by automating API integration questions',
      color: 'text-green-600'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Never lose a customer due to support wait times',
      color: 'text-blue-600'
    },
    {
      icon: UsersIcon,
      title: 'Reduce Churn',
      description: 'Faster integrations mean happier, more successful customers',
      color: 'text-purple-600'
    }
  ]

  const howItWorks = [
    {
      number: '1',
      title: 'Upload API Docs',
      description: 'Upload your API documentation to Avenai in minutes'
    },
    {
      number: '2',
      title: 'Integrate Portal',
      description: 'Add Avenai to your customer dashboard with one line of code'
    },
    {
      number: '3',
      title: 'Reduce Support',
      description: 'Watch support tickets drop as customers get instant AI help'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <SparklesIcon className="h-5 w-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Avenai
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a
                href="https://app.avenai.io"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Stop Losing Customers to
            <span className="block text-blue-600">
              API Integration Problems
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Avenai is a 24/7 AI that reads your API docs and answers your customers&apos; questions. 
            It&apos;s like having a technical support person who never sleeps and knows your API inside out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://app.avenai.io"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="https://app.avenai.io"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <PlayIcon className="inline-block w-5 h-5 mr-2" />
              Watch Demo
            </a>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`${benefit.color} mb-4`}>
                  <benefit.icon className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Provide 24/7 API Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your customer support from reactive to proactive with AI-powered API assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-6 group-hover:bg-blue-100 transition-colors`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not months
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Start with a free trial, then scale as you grow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-lg border-2 border-blue-200 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Plan</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold text-blue-600">$2,000</span>
                  <span className="text-gray-500 ml-2 text-xl">/month</span>
                </div>
                <p className="text-gray-600 mt-2 text-lg">Perfect for SaaS companies with API integration support needs</p>
              </div>

              <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited API documentation uploads</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 AI-powered customer support</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Branded customer portal integration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Priority support and onboarding</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="https://app.avenai.io"
                  className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <p className="text-blue-600 mt-4 text-lg font-medium">
                  Free for the first month • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Reduce Support Costs by $50K+ Annually?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the first companies testing Avenai. We&apos;ll integrate it for free for the first month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
            <a
              href="https://app.avenai.io"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="https://app.avenai.io"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
          
          <p className="text-gray-400 text-lg">
            Limited to 1-2 companies for initial testing • $2K/month after trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                  <SparklesIcon className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">Avenai</span>
              </div>
              <p className="text-gray-600">
                The 24/7 AI that reads your API docs and answers your customers&apos; questions
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="https://app.avenai.io" className="hover:text-gray-900 transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="https://app.avenai.io/help" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="https://app.avenai.io/docs" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="https://app.avenai.io/contact" className="hover:text-gray-900 transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Avenai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
