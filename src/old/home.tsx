import React from "react";

// Hikewa - Homepage (Full Premium Version)
// React + Tailwind CSS (single-file component). Replace placeholder images with real assets.
// NOTE: This is a presentational page component (no backend hooks). It's a ready-to-use starting point.

export default function HikewaHome() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
                <span className="font-semibold text-lg">Hikewa</span>
              </div>
              <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                <a className="hover:text-gray-900" href="#product">Product</a>
                <a className="hover:text-gray-900" href="#solutions">Solutions</a>
                <a className="hover:text-gray-900" href="#dfy">DFY Services</a>
                <a className="hover:text-gray-900" href="#pricing">Pricing</a>
                <a className="hover:text-gray-900" href="#resources">Resources</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <a href="#login" className="text-sm text-gray-600 hover:text-gray-900">Login</a>
              <a href="#start" className="inline-flex items-center px-4 py-2 bg-[#2C6CF2] hover:bg-[#2458d6] text-white rounded-md text-sm font-medium">Start Free</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Run your entire business with AI</h1>
              <p className="mt-6 text-lg text-gray-600">Meet <strong>Kewa</strong> — your AI business agent that automates CRM, funnels, bookings, messaging and marketing. Get live in <strong>48 hours</strong> with our DFY team.</p>

              <div className="mt-8 flex gap-3">
                <a href="#start" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white rounded-lg font-semibold shadow">Get Started — Free</a>
                <a href="#demo" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-lg text-gray-700">Book a Demo</a>
              </div>

              <div className="mt-8 text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center">🚀</div>
                  <div>
                    <div className="text-sm font-medium">48-Hour DFY Setup</div>
                    <div className="text-xs">CRM, Funnels, Automations — we do it for you.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center">🤖</div>
                  <div>
                    <div className="text-sm font-medium">AI Agent Included</div>
                    <div className="text-xs">Kewa writes, automates and optimizes.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-xs text-gray-400">Trusted by businesses across the US — launch fast, automate smarter.</div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-lg">
                {/* Dashboard mockup - simplified */}
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-6 flex gap-6">
                    <div className="w-64 bg-gradient-to-br from-[#F8FAFF] to-white rounded-lg p-4">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                      <div className="mt-4 h-40 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="h-6 w-36 bg-gray-200 rounded mb-3"></div>
                          <div className="h-4 w-28 bg-gray-100 rounded"></div>
                        </div>
                        <div className="text-sm text-gray-400">Live • 2s ago</div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="p-3 bg-[#F3F8FF] rounded">
                          <div className="text-xs text-gray-500">Leads</div>
                          <div className="text-xl font-semibold">124</div>
                        </div>
                        <div className="p-3 bg-[#F9F7FF] rounded">
                          <div className="text-xs text-gray-500">Appointments</div>
                          <div className="text-xl font-semibold">24</div>
                        </div>
                        <div className="p-3 bg-[#FFF7F8] rounded">
                          <div className="text-xs text-gray-500">Opportunities</div>
                          <div className="text-xl font-semibold">8</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="mt-2 h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mt-6 px-2">
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Kewa — AI Suggestions</div>
                      <div className="text-xs text-gray-400">Recommendations</div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">Your booking rate dropped 12% last week. Suggest adding a second reminder 1 hour before appointments. <button className="ml-2 text-sm text-[#2C6CF2]">Apply Fix</button></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Integrations strip */}
        <section className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6 overflow-x-auto py-2">
              {['Google', 'Gmail', 'Outlook', 'Facebook', 'Instagram', 'Twilio', 'Zapier', 'Stripe'].map((name) => (
                <div key={name} className="flex items-center gap-3 bg-white px-3 py-2 rounded-md shadow-sm">
                  <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-sm font-semibold">{name[0]}</div>
                  <div className="text-xs text-gray-600">{name}</div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">Connect with the tools you already use.</div>
          </div>
        </section>

        {/* Kewa / DFY Row */}
        <section id="product" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Meet Kewa — Your AI Business Agent</h2>
            <p className="mt-3 text-gray-600">Kewa writes emails, builds automations, manages follow-ups and trains your team. Talk to Kewa like a teammate — not a tool.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm font-medium">Write Emails</div>
                <div className="text-xs text-gray-500 mt-2">Short, personalized sequences that convert.</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm font-medium">Build Automations</div>
                <div className="text-xs text-gray-500 mt-2">Create workflows with simple commands.</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-sm font-medium">Train Team</div>
                <div className="text-xs text-gray-500 mt-2">Onboard your staff with AI-guided lessons.</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium">DFY — 48-Hour Setup</h3>
              <p className="text-gray-600 mt-2">Choose your industry pack and our team will configure your entire system: CRM, funnels, emails, calendaring and automations.</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Domain & branding</li>
                <li>• CRM imports & pipeline setup</li>
                <li>• 1 DFY funnel & 5-email sequence</li>
                <li>• Calendar & appointment setup</li>
              </ul>

              <div className="mt-4">
                <a href="#dfy" className="inline-flex items-center px-4 py-2 bg-[#7A4BFF] text-white rounded-md">Start DFY Setup</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Popular Industry Packs</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Real Estate', 'Fitness', 'Coaches', 'Local Biz', 'Ecommerce', 'Agencies'].map((p) => (
                <div key={p} className="p-3 bg-white rounded-lg shadow-sm flex items-center justify-between">
                  <div className="text-sm">{p}</div>
                  <div className="text-xs text-gray-400">Template</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#F3F8FF] to-white p-4 rounded-lg shadow-sm">
              <div className="text-sm font-medium">Need a custom setup?</div>
              <div className="text-xs text-gray-600 mt-2">Our DFY team can build complex flows & multi-location systems.</div>
              <div className="mt-3"><a className="text-sm text-[#2C6CF2]" href="#contact">Talk to an expert →</a></div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="solutions" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-semibold">Who Hikewa helps</h2>
            <p className="mt-3 text-gray-600">Solopreneurs, small businesses, agencies, and enterprises. Configurable to your needs.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Coaches', 'Real Estate', 'Fitness', 'Salons', 'Agencies', 'Ecommerce'].map((c) => (
                <div key={c} className="p-4 bg-gray-50 rounded-lg text-center">{c}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Automate everything — in minutes</h3>
              <p className="mt-3 text-gray-600">From instant follow-ups to abandoned-lead recovery, Hikewa automations save time and capture more revenue.</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• New lead → Immediate SMS & email</li>
                <li>• Appointment reminders → reduce no-shows</li>
                <li>• Abandoned funnel recovery → bring back prospects</li>
                <li>• Re-engagement sequences → increase retention</li>
              </ul>

              <div className="mt-6"><a className="px-4 py-2 bg-[#2C6CF2] text-white rounded-md" href="#automation">See automations</a></div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-64 bg-gradient-to-br from-[#FBFBFF] to-white rounded-lg flex items-center justify-center text-gray-300">Automation Flow Visual</div>
            </div>
          </div>
        </section>

        {/* Comparison & Testimonials */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold">Hikewa vs the alternatives</h3>
            <div className="mt-6 overflow-auto">
              <table className="w-full text-sm bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Hikewa</th>
                    <th className="p-4">GoHighLevel</th>
                    <th className="p-4">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI Agent', '✔ Kewa', '✖', '✖'],
                    ['48-Hour DFY', '✔', '✖', '✖'],
                    ['All-in-One', '✔', '✔', '✖'],
                    ['Integrations', '✔', '✔', '✔'],
                    ['Price', '✔', 'Medium', 'High']
                  ].map((r, i) => (
                    <tr key={i} className="border-b even:bg-gray-50">
                      <td className="p-4">{r[0]}</td>
                      <td className="p-4 font-medium">{r[1]}</td>
                      <td className="p-4">{r[2]}</td>
                      <td className="p-4">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[1,2,3].map((n)=> (
                <div key={n} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm font-medium">"Hikewa saved us hours every week."</div>
                  <div className="text-xs text-gray-500 mt-2">— Beta user</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <details className="bg-white p-4 rounded-lg shadow-sm">
                  <summary className="font-medium">What is Kewa?</summary>
                  <div className="mt-2">Kewa is the AI business agent — writes emails, builds automations, and optimizes funnels for you.</div>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-sm">
                  <summary className="font-medium">How long does setup take?</summary>
                  <div className="mt-2">Most customers are live within 48 hours with our DFY service.</div>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-sm">
                  <summary className="font-medium">Can I use my own CRM?</summary>
                  <div className="mt-2">Yes — sync with HubSpot, Salesforce, Pipedrive and more.</div>
                </details>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-semibold">Ready to automate your business?</h3>
              <p className="mt-2 text-sm">Start your free trial or book a strategy call with our team. No credit card required.</p>
              <div className="mt-4 flex gap-3">
                <a href="#start" className="px-4 py-2 bg-white text-[#2C6CF2] rounded-md font-medium">Start Free</a>
                <a href="#demo" className="px-4 py-2 border border-white rounded-md">Book Strategy Call</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
                <div>
                  <div className="font-semibold">Hikewa</div>
                  <div className="text-xs text-gray-500">AI-powered business OS</div>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="font-medium">Product</div>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>CRM</li>
                  <li>Automations</li>
                  <li>Kewa</li>
                  <li>DFY Services</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Company</div>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="font-medium">Legal</div>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}
