import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-800"
        >
          Never Lose a Bill Again
        </motion.h1>
        
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Upload your bills, auto-extract warranty details, and get timely reminders — all in one secure vault.
        </p>
        
        <div className="mt-6 flex gap-4">
          <Button className="px-6 py-3 text-lg">Get Started</Button>
          <Button variant="outline" className="px-6 py-3 text-lg">Login</Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Secure Cloud Storage", desc: "Store all your bills safely in the cloud." },
            { title: "Warranty Reminders", desc: "Get notified before warranties expire." },
            { title: "OCR Bill Scanner", desc: "Auto-extract details from uploaded bills." },
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100 mt-10">
        <p className="text-gray-600">© 2025 WarrantyVault. All rights reserved.</p>
      </footer>
    </div>
  );
}
