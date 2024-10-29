import Hero from "@/Component/hero/Hero";
import Category from "@/Component/Category.jsx";
import Products from "@/components/Products";
import Explore from "@/Component/Explore";
import ShareGallery from "@/Component/ShareGallery";
import Footer from "@/Component/Footer";
import useStore from "@/store/useAuthStore";

export default function page() {
  return (
  <div>  
    <Hero />
    <main className="my-20">
        <Category />
        <Products/>
        <Explore/>
    </main>
  </div>
)
}
