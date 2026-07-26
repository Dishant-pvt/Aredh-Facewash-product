import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  BookOpen, 
  Clock, 
  User, 
  Tag, 
  ChevronRight, 
  X, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft, 
  Copy, 
  Check, 
  Instagram, 
  MessageSquare,
  HelpCircle
} from "lucide-react";
import { BLOG_POSTS } from "../blogsData";
import { BlogPost } from "../types";

interface BlogSectionProps {
  onEnquireClick?: () => void;
}

export default function BlogSection({ onEnquireClick }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = [
    "All",
    "Ingredients",
    "Ayurvedic Skincare",
    "Rituals & Routines",
    "Skin Types & Doshas",
    "Natural Beauty Secrets"
  ];

  // Filter articles based on search query and category
  const filteredArticles = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.subtitle.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.keywords.some((kw) => kw.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle URL hash navigation if a blog post slug is passed in hash e.g. #blog-slug
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("article-")) {
        const slug = hash.replace("article-", "");
        const found = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
        if (found) {
          setActiveArticle(found);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Prevent main site background scrolling when active article modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  // Handle ESC key to close article modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeArticle) {
        handleCloseArticle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticle]);

  // Dynamically inject JSON-LD Schema for SEO when an article is active
  useEffect(() => {
    if (activeArticle) {
      const scriptId = "schema-blog-post";
      let existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        existingScript = document.createElement("script");
        existingScript.id = scriptId;
        existingScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(existingScript);
      }

      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": activeArticle.title,
        "description": activeArticle.metaDescription,
        "image": window.location.origin + activeArticle.imageUrl,
        "author": {
          "@type": "Organization",
          "name": activeArticle.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "AREDH Ayurvedic Skincare",
          "url": "https://aredh.in"
        },
        "datePublished": activeArticle.publishedDate,
        "keywords": activeArticle.keywords.join(", ")
      };

      existingScript.textContent = JSON.stringify(schemaData);
    }
  }, [activeArticle]);

  const handleOpenArticle = (post: BlogPost) => {
    setActiveArticle(post);
    window.history.pushState(null, "", `#article-${post.slug}`);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    window.history.pushState(null, "", `#blog`);
  };

  const handleCopyLink = () => {
    if (activeArticle) {
      const url = `${window.location.origin}/#article-${activeArticle.slug}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    if (activeArticle) {
      const text = encodeURIComponent(
        `Check out this article on Ayurvedic Skincare: "${activeArticle.title}"\n\nRead here: ${window.location.origin}/#article-${activeArticle.slug}`
      );
      window.open(`https://wa.me/?text=${text}`, "_blank");
    }
  };

  return (
    <section id="blog" className="py-24 bg-stone-950 relative overflow-hidden border-t border-stone-900">
      {/* Background Subtle Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-xs uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEO Knowledge Hub & Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-normal tracking-tight">
            Ayurvedic Skincare <span className="italic text-gold-300">Wisdom</span>
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
            Discover in-depth botanical research, ancient ingredient spotlights, and holistic ritual guides formulated to help you achieve a radiant, chemical-free glow.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search by ingredient (e.g. Manjistha, Sandalwood), skin concern, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-stone-900/80 border border-stone-800 rounded-2xl text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-500 hover:text-stone-300 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gold-400/20 text-gold-300 border border-gold-400/40 shadow-sm"
                    : "bg-stone-900/60 text-stone-400 border border-stone-800/80 hover:bg-stone-800 hover:text-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Count / Active Filter Feedback */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-8 border-b border-stone-900 pb-3">
          <span>Showing {filteredArticles.length} of {BLOG_POSTS.length} Articles</span>
          {searchQuery && <span>Filter: "{searchQuery}"</span>}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((post) => (
              <article
                key={post.id}
                onClick={() => handleOpenArticle(post)}
                className="group bg-stone-900/40 border border-stone-800/80 hover:border-gold-400/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-stone-950/80 backdrop-blur-md border border-gold-400/30 text-gold-300 text-[10px] font-mono uppercase tracking-wider rounded-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Content Preview */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-stone-500 text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-400/70" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.publishedDate}</span>
                    </div>

                    <h3 className="font-serif text-lg font-normal text-stone-100 group-hover:text-gold-300 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-400 text-xs font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Meta & CTA */}
                <div className="px-6 pb-6 pt-2 border-t border-stone-900/80 flex items-center justify-between text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                    <User className="w-3 h-3 text-gold-400/70" />
                    <span className="truncate max-w-[130px]">{post.author}</span>
                  </div>

                  <span className="text-gold-300 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-xs font-semibold">
                    Read Article
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-stone-900/30 border border-stone-800 rounded-2xl max-w-md mx-auto space-y-4">
            <Search className="w-8 h-8 text-stone-500 mx-auto" />
            <p className="text-stone-300 font-serif text-base">No articles found matching your criteria.</p>
            <p className="text-stone-500 text-xs">Try searching for keywords like "Manjistha", "Sandalwood", or "Soap-Free".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-gold-300 text-xs font-mono rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full Article Drawer / Reader Modal */}
      {activeArticle && (
        <div 
          onClick={handleCloseArticle}
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/90 backdrop-blur-xl flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn overscroll-contain"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-stone-900 border border-gold-400/30 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto shadow-2xl flex flex-col text-stone-200 overscroll-contain"
          >
            {/* Modal Header Controls */}
            <div className="sticky top-0 z-20 bg-stone-900/95 backdrop-blur-md px-6 py-4 border-b border-stone-800 flex items-center justify-between">
              <button
                onClick={handleCloseArticle}
                className="inline-flex items-center gap-2 text-stone-400 hover:text-gold-300 text-xs font-mono transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Journal</span>
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleWhatsAppShare}
                  className="p-2 bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5"
                  title="Share on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5"
                  title="Copy Article Link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Copy Link"}</span>
                </button>
                <button
                  onClick={handleCloseArticle}
                  className="p-2 bg-stone-800/80 hover:bg-stone-700 text-stone-400 hover:text-stone-100 rounded-xl transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Meta Info Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1 bg-gold-400/10 border border-gold-400/30 text-gold-300 rounded-full">
                    {activeArticle.category}
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-stone-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400/80" />
                    {activeArticle.readTime}
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-stone-400">{activeArticle.publishedDate}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-100 leading-tight">
                  {activeArticle.title}
                </h1>
                <p className="font-sans text-stone-400 text-sm sm:text-base italic">
                  {activeArticle.subtitle}
                </p>

                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-stone-400 border-t border-stone-800/60">
                  <User className="w-3.5 h-3.5 text-gold-400" />
                  <span>By {activeArticle.author}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-stone-800 bg-stone-950">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Introduction */}
              <div className="text-stone-300 text-base leading-relaxed font-sans bg-stone-950/40 p-6 rounded-2xl border border-stone-800/80">
                <p className="first-letter:text-3xl first-letter:font-serif first-letter:text-gold-300 first-letter:mr-2">
                  {activeArticle.content.introduction}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {activeArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl text-gold-200 font-normal">
                      {section.heading}
                    </h2>
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
                      {section.body}
                    </p>
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2 pt-2">
                        {section.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-stone-300 text-sm font-sans">
                            <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways Box */}
              {activeArticle.content.keyTakeaways && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-gold-950/20 border border-gold-400/30 space-y-3">
                  <div className="flex items-center gap-2 text-gold-300 font-serif text-lg">
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    <span>Key Takeaways for Your Skincare Ritual</span>
                  </div>
                  <ul className="space-y-2">
                    {activeArticle.content.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="text-stone-300 text-xs sm:text-sm font-sans flex items-start gap-2">
                        <span className="text-gold-400 font-mono">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ Section within article if available */}
              {activeArticle.content.faq && activeArticle.content.faq.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-stone-800">
                  <h3 className="font-serif text-xl text-stone-100 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-gold-400" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {activeArticle.content.faq.map((item, fIdx) => (
                      <div key={fIdx} className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-1.5">
                        <p className="text-gold-300 font-sans text-xs sm:text-sm font-semibold">
                          Q: {item.question}
                        </p>
                        <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-stone-800">
                <Tag className="w-3.5 h-3.5 text-stone-500" />
                {activeArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-stone-950 border border-stone-800 text-stone-400 text-[11px] font-mono rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Product Call-to-Action Banner */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-stone-900 to-gold-950/40 border border-gold-400/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center mx-auto text-gold-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-100">
                  Ready to Experience Pure Ayurvedic Cleansing?
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
                  AREDH Herbal Cleanser is a 100% soap-free, micro-milled botanical formulation containing Sandalwood, Licorice, Manjistha, and Haridra.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      handleCloseArticle();
                      if (onEnquireClick) {
                        onEnquireClick();
                      } else {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-105"
                  >
                    Order AREDH Cleanser
                  </button>
                  <a
                    href="https://www.instagram.com/aredh_skincare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-stone-900 hover:bg-stone-800 border border-pink-500/30 text-pink-300 text-xs font-mono rounded-xl transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    Follow @aredh_skincare
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
