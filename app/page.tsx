// Inside app/page.tsx return statement
<main className="overflow-x-hidden bg-white">
  <Navbar />
  <HeroSection />
  <CommunityFeaturesBar />
  <div className="-mt-8"> {/* Less aggressive gap */}
    <NeighborAdvantage />
  </div>
  <div className="-mt-12"> {/* Less aggressive gap */}
    <MapSection />
  </div>
  <ContactForm />
  <Footer />
</main>
