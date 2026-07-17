import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Prasādam Sweet Shop — ISKCON Nairobi",
  description: "Artisanal Vaishnava sweets and prasādam products from ISKCON Nairobi's kitchen. Festival specials, gift packs, and bulk orders.",
};

const products = [
  { name: "Laddhū (Box of 12)", price: "KES 950", desc: "Classic saffron-infused gram flour laddhu prepared with pure ghee. The original prasādam sweet.", tag: "Bestseller", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
  { name: "Gulab Jamun (Box of 16)", price: "KES 800", desc: "Soft milk-solid dumplings soaked in rose-infused sugar syrup. Prepared fresh to order.", tag: "Popular", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
  { name: "Halava Gift Pack", price: "KES 1,200", desc: "Semolina halava packed in artisan containers — ideal as a devotional gift or festival offering.", tag: "Gift", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
  { name: "Barfi Assortment (500g)", price: "KES 1,400", desc: "Mixed milk-based barfi selection — pistachio, saffron, coconut, and rose. Beautifully boxed.", tag: "Assortment", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
  { name: "Festival Sweet Hamper", price: "KES 3,500", desc: "A curated hamper of six varieties — the perfect corporate or family gift for festivals and celebrations.", tag: "Festival", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
  { name: "Bulk Order (5kg+)", price: "From KES 4,500", desc: "Wholesale prasādam sweets for events, weddings, corporate functions, and temple programmes.", tag: "Bulk", image: "/images/placeholders/iskcon-khichdi-prasadam.jpg" },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Prasādam"
        titleAccent="Sweet Shop"
        subtitle="Artisanal Temple Sweets"
        description="Handcrafted Vaishnava sweets prepared with pure ingredients, devotion, and the highest culinary standards from our temple kitchen."
        image="/images/placeholders/iskcon-khichdi-prasadam.jpg"
      />

      {/* Brand strip */}
      <div className="bg-gold py-5 section-padding">
        <div className="content-width flex flex-wrap items-center justify-center gap-8">
          {["Pure Ghee", "No Preservatives", "Temple Prepared", "Made Fresh to Order", "Nairobi Delivery"].map(tag => (
            <div key={tag} className="flex items-center gap-2">
              <Star size={10} className="text-white" />
              <span className="font-inter text-white text-xs font-medium tracking-wider">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className="py-section bg-temple-bg">
        <div className="content-width section-padding">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Our Products</span>
            <h2 className="section-title">Temple Sweets<br /><em className="text-gold not-italic font-normal">& Prasādam</em></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="group bg-white border border-temple-sand hover:shadow-card-hover hover:border-gold/30 transition-all overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="font-inter text-[10px] font-bold tracking-widest uppercase bg-gold text-white px-3 py-1">{product.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-playfair text-lg font-semibold text-ink">{product.name}</h3>
                    <span className="font-playfair text-gold font-bold text-lg flex-shrink-0 ml-2">{product.price}</span>
                  </div>
                  <p className="font-inter text-ink/60 text-sm leading-relaxed mb-5">{product.desc}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-temple-brown text-white font-inter text-xs font-semibold tracking-widest uppercase py-3 hover:bg-gold transition-colors">
                    <ShoppingBag size={12} />
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ordering info */}
          <div className="mt-14 bg-temple-cream border border-temple-sand p-8 lg:p-10 grid sm:grid-cols-3 gap-8">
            {[
              { title: "Order Process", desc: "Place your order via WhatsApp or email. We confirm availability and prepare fresh within 24–48 hours." },
              { title: "Delivery", desc: "Nairobi delivery available. Same-day pickup at the temple (South C). Outstation orders via courier." },
              { title: "Bulk & Events", desc: "Special pricing for orders over 2kg. Ideal for weddings, corporate events, and festival distribution." },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-playfair text-lg font-semibold text-ink mb-2">{item.title}</h4>
                <div className="w-5 h-px bg-gold/40 mb-3" />
                <p className="font-inter text-ink/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary">Place a Custom Order</Link>
          </div>
        </div>
      </section>
    </>
  );
}
