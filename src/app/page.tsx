'use client'

import { useState, useEffect } from 'react'
import { 
  SparklesIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckIcon,
  PlayIcon,
  CodeBracketIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

export default function MarketingLanding() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      alert('Thank you for your interest! We\'ll be in touch soon.')
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'API Documentation Upload',
      description: 'Simply upload your API docs and Avenai instantly becomes an expert on your entire API.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '24/7 AI Support',
      description: 'Your customers get instant answers to API questions, error debugging, and code examples.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: CodeBracketIcon,
      title: 'Error Code Debugging',
      description: 'Customers paste error codes and get instant solutions with step-by-step guidance.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Branded Customer Portal',
      description: 'Seamlessly integrate Avenai into your existing customer dashboard with your branding.',
      gradient: 'from-slate-600 to-gray-700'
    },
    {
      icon: ChartBarIcon,
      title: 'Integration Analytics',
      description: 'Track integration success rates, support ticket reduction, and customer satisfaction.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: UsersIcon,
      title: 'Multi-tenant Support',
      description: 'Serve multiple customer organizations with isolated, secure environments.',
      gradient: 'from-rose-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: 'Save $50K+ Annually',
      description: 'Reduce support costs by automating API integration questions',
      color: 'text-green-400'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Never lose a customer due to support wait times',
      color: 'text-blue-400'
    },
    {
      icon: UsersIcon,
      title: 'Reduce Churn',
      description: 'Faster integrations mean happier, more successful customers',
      color: 'text-purple-400'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.05,
            top: mousePosition.y * 0.05,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.03,
            bottom: mousePosition.y * 0.03,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.03)_1px,transparent_0)] bg-[length:80px_80px]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="relative">
                <SparklesIcon className="h-10 w-10 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-ping" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Avenai
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <a
                href="https://app.avenai.io"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-8 leading-tight">
              Stop Losing Customers to
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                API Integration Problems
              </span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl -z-10" />
          </div>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Avenai is a 24/7 AI that reads your API docs and answers your customers' questions. 
            It's like having a technical support person who never sleeps and knows your API inside out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://app.avenai.io"
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://app.avenai.io"
              className="group relative border-2 border-white/20 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <PlayIcon className="inline-block w-6 h-6 mr-2" />
              Watch Demo
            </a>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                  <benefit.icon className="h-12 w-12 mx-auto mb-3" />
                  {benefit.title}
                </div>
                <div className="text-gray-300 text-center">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
              Everything You Need to Provide 24/7 API Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your customer support from reactive to proactive with AI-powered API assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-blue-500/50"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-32 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">How It Works</h2>
            <p className="text-xl text-gray-300">
              Get started in minutes, not months
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-4xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">
              Start with a free trial, then scale as you grow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border-2 border-blue-500/50 rounded-3xl p-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Professional Plan</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">$2,000</span>
                  <span className="text-gray-400 ml-2 text-2xl">/month</span>
                </div>
                <p className="text-gray-300 mt-2 text-lg">Perfect for SaaS companies with API integration support needs</p>
              </div>

              <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Unlimited API documentation uploads</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">24/7 AI-powered customer support</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Branded customer portal integration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Priority support and onboarding</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="https://app.avenai.io"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
                >
                  Start Free Trial
                </a>
                <p className="text-blue-200 mt-4 text-lg">
                  Free for the first month • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-32 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6">
            Ready to Reduce Support Costs by $50K+ Annually?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the first companies testing Avenai. We'll integrate it for free for the first month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
            <a
              href="https://app.avenai.io"
              className="group relative bg-gradient-to-r from-white to-blue-50 text-slate-900 px-10 py-4 rounded-2xl text-xl font-bold hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://app.avenai.io"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50"
            >
              Schedule Demo
            </a>
          </div>
          
          <p className="text-blue-200 text-lg">
            Limited to 1-2 companies for initial testing • $2K/month after trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/50 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-10 w-10 text-blue-400" />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Avenai</span>
              </div>
              <p className="text-gray-400 text-lg">
                The 24/7 AI that reads your API docs and answers your customers' questions
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://app.avenai.io" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://app.avenai.io/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="https://app.avenai.io/docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://app.avenai.io/contact" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Avenai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
