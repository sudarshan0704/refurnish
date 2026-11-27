/*
 * SERVICE DATA
 * ---------------------------------------------------------------------------
 * Every service page (/services/<slug>) and every service card on the site is
 * built from this list. To edit a service, change its object. To add one, copy
 * an object and give it a new slug.
 *
 *   slug             URL: /services/<slug>
 *   title            Short name used on cards and in menus
 *   pageTitle        H1 on the service page
 *   description      One line shown on the service card
 *   image            Card image (service cards)
 *   banner           Banner image at the top of the service page
 *   cover            Large image at the top of the page content
 *   imageAlt         Describes the cover image (SEO + accessibility)
 *   metaTitle        <title> of the page. "| Refurnish" is added automatically
 *   metaDescription  Meta description, keep under 160 characters
 *   keywords         Search phrases this page targets
 *   heading          H2 above the main description
 *   overview         Paragraphs of the main description
 *   problems         Customer problems this service solves
 *   includes         What the work covers
 *   benefits         { title, text } benefit blocks
 *   faqs             { question, answer }  (also output as FAQ structured data)
 *   related          Slugs of other services to link to
 */

export const processSteps = [
  {
    title: "Share your furniture",
    text: "Send us photos on WhatsApp or call us and tell us what the piece needs.",
  },
  {
    title: "We assess the piece",
    text: "We look at the material, the condition and the finish you would like.",
  },
  {
    title: "We agree the work",
    text: "We settle what will be repaired, restored, refinished or re-covered.",
  },
  {
    title: "We restore it",
    text: "The agreed work is carried out and your furniture is ready to use again.",
  },
];

export const services = [
  {
    slug: "wooden-furniture-restoration",
    title: "Wooden Furniture Restoration",
    pageTitle: "Wooden Furniture Restoration",
    description: "Repair and restore worn wooden furniture while preserving its character.",
    image: "/images/blog/post-3-card.jpg",
    banner: "/images/banners/service-wooden.jpg",
    cover: "/images/blog/post-3-cover.jpg",
    imageAlt: "Wooden dining table and chairs in a bright room",
    metaTitle: "Wooden Furniture Restoration in Bangalore",
    metaDescription:
      "Wooden furniture restoration in Bangalore. We repair, polish and refinish tables, chairs, beds and cabinets. Share photos of your piece to get started.",
    keywords: [
      "Wooden Furniture Restoration in Bangalore",
      "old wooden furniture restoration Bangalore",
      "wooden table restoration Bangalore",
      "wooden chair repair and restoration",
      "wooden cabinet restoration",
      "restore old wooden furniture",
    ],
    heading: "Wooden furniture restoration in Bangalore",
    overview: [
      "Good wooden furniture is built to last, but years of daily use take their toll. Finishes fade, surfaces pick up scratches and water marks, and joints loosen. We restore wooden furniture so you can keep using the pieces you already own, with a finish that looks cared for again.",
      "Every piece is different, so we start by looking closely at the wood, the damage and the look you want. From there we repair what is worn or broken and renew the finish. Our aim is to bring the piece back to its best while keeping the character that made you choose it.",
      "For customers in Bangalore and Bengaluru, we assess photos before discussing the piece, the repair needed and the restoration options.",
    ],
    scopeHeading: "Old wooden furniture, assessed piece by piece",
    scopeIntro:
      "Wooden furniture restoration combines structural work with surface restoration. A dining table may need loose joints tightened and a worn tabletop refinished, while a cabinet may need surface repair and polishing. We confirm the scope after assessing the wood, finish and movement of the piece.",
    idealFor: [
      "Solid wooden tables and chairs with surface wear or loose joints",
      "Cabinets and shelves that have a sound frame but a tired finish",
      "Old wooden furniture that fits the room and has sentimental value",
      "Pieces that need a combination of repair, polishing or refinishing",
    ],
    blogLinks: [
      ["common-furniture-repairs", "Common furniture repairs and structural problems"],
      ["how-furniture-polishing-brings-back-the-shine", "How wooden furniture polishing restores the shine"],
      ["refinishing-vs-repainting-furniture", "Refinishing versus repainting furniture"],
    ],
    materials: [
      "Solid wood tables, chairs, cabinets and shelves",
      "Wooden beds, wardrobes and storage furniture",
      "Natural wood finishes and existing polished surfaces",
    ],
    problems: [
      "Dull, faded or uneven wood finish",
      "Scratches, marks, stains and water rings on tabletops",
      "Loose joints and wobbly chairs or tables",
      "Cracked, peeling or sticky old polish",
      "Wooden furniture that no longer suits the rest of your room",
      "Sentimental pieces you would rather restore than replace",
    ],
    includes: [
      "Looking over the wood and its condition",
      "Repair of worn or damaged parts and loose joints",
      "Cleaning and preparing the surface",
      "Polishing or refinishing to renew the look",
      "Final finishing so the piece is ready for use",
    ],
    benefits: [
      {
        title: "Keep furniture you already like",
        text: "Restoration lets you hold on to solid pieces instead of replacing them.",
      },
      {
        title: "A fresh, renewed look",
        text: "A new finish brings back the warmth and grain of the wood.",
      },
      {
        title: "A practical alternative to buying new",
        text: "Depending on the piece, restoration can be a more economical choice than buying new furniture.",
      },
      {
        title: "Pieces that keep their story",
        text: "Furniture with sentimental value stays in your home, only in better condition.",
      },
    ],
    faqs: [
      {
        question: "What kinds of wooden furniture can you restore?",
        answer:
          "We work on tables, chairs, beds, wardrobes, cabinets, shelves and other wooden pieces. Whether a piece is worth restoring depends on its condition, so the easiest way to find out is to send us photos.",
      },
      {
        question: "Can you change the colour of my wooden furniture?",
        answer:
          "Yes. Through refinishing or repainting we can change the colour or style of a piece. If you want to keep the natural look of the wood, we can polish it instead.",
      },
      {
        question: "Is it better to restore old wooden furniture or buy new?",
        answer:
          "If the structure is sound, restoration is usually worth considering, especially for pieces you like or that have sentimental value. We will tell you honestly what a piece needs.",
      },
      {
        question: "How do I get a quote for wooden furniture restoration?",
        answer:
          "Send photos of the piece on WhatsApp or call us on +91 76760 45748. Tell us what bothers you about it and what you would like done, and we will take it from there.",
      },
    ],
    related: ["furniture-polishing", "furniture-repair", "furniture-refinishing"],
  },
  {
    slug: "sofa-and-chair-upholstery",
    title: "Sofa & Chair Upholstery",
    pageTitle: "Sofa & Chair Upholstery",
    description: "Refresh sofas and chairs with carefully selected fabric or leather.",
    image: "/images/blog/post-2-card.jpg",
    banner: "/images/banners/service-upholstery.jpg",
    cover: "/images/blog/post-2-cover.jpg",
    imageAlt: "Sofa and chairs with refreshed upholstery in a bright room",
    metaTitle: "Sofa Upholstery & Chair Re-upholstery in Bangalore",
    metaDescription:
      "Sofa and chair upholstery in Bangalore. Replace worn fabric or leather and give your sofa or chairs a fresh new look. Send photos for a quote.",
    keywords: [
      "Sofa Upholstery Services in Bangalore",
      "Sofa Restoration in Bangalore",
      "sofa re-upholstery Bangalore",
      "chair upholstery Bangalore",
      "leather sofa makeover Bangalore",
      "sofa fabric replacement",
    ],
    heading: "Sofa and chair upholstery in Bangalore",
    overview: [
      "A sofa or chair that is still comfortable does not have to be replaced just because the covering looks tired. Fabric fades, leather cracks and cushions lose their shape. With new upholstery, the same piece can look and feel fresh again.",
      "We replace the upholstery on sofas, armchairs and dining chairs, and help you choose a fabric or leather that suits your room and the way you use the furniture. It is a simple way to update your living space while keeping furniture you already know is comfortable.",
      "In Bangalore and Bengaluru, send clear photos of the sofa or chair, its frame and the worn areas so we can assess whether upholstery or frame repair is needed first.",
    ],
    scopeHeading: "When to choose sofa or chair upholstery",
    scopeIntro:
      "Re-upholstery is suitable when the main shape and frame of the sofa or chair are sound but the covering is worn, stained or dated. We inspect the piece before work because torn upholstery can sometimes hide loose joints or weakened areas that need furniture repair first.",
    idealFor: [
      "Sofas with strong frames but faded, torn or stained fabric",
      "Armchairs and dining chairs that need a new seat or complete cover",
      "Leather furniture with a worn cover and intact structure",
      "Pieces that need fresh fabric or leather to match a redesigned room",
    ],
    blogLinks: [
      ["signs-your-sofa-needs-new-upholstery", "Signs your sofa needs new upholstery"],
      ["restore-or-replace-old-furniture", "How to decide whether to restore or replace furniture"],
      ["modern-makeover-for-outdated-furniture", "Ideas for modernising outdated furniture"],
    ],
    materials: [
      "Fabric sofas, settees and armchairs",
      "Leather and leatherette furniture",
      "Dining chairs and removable or fixed seat covers",
    ],
    problems: [
      "Faded, stained or worn fabric",
      "Torn seats and frayed arms",
      "Cracked or peeling leather",
      "Flat or uneven cushions",
      "A sofa or chair in a style or colour that no longer suits your room",
      "Dining chairs with worn seat covers",
    ],
    includes: [
      "Checking the frame and structure of the piece",
      "Choosing the fabric or leather with you",
      "Removing the old covering",
      "Fitting the new upholstery",
      "Finishing so the piece looks neat and ready to use",
    ],
    benefits: [
      {
        title: "A new look for your sofa or chair",
        text: "Fresh fabric or leather changes the whole feel of a piece and the room around it.",
      },
      {
        title: "Keep the comfort you know",
        text: "You keep a sofa or chair that is already comfortable instead of starting again.",
      },
      {
        title: "Choose what suits your home",
        text: "Pick the colour, texture and material that works with your interiors.",
      },
      {
        title: "A smarter way to refresh",
        text: "Re-covering is a practical way to update furniture without replacing it.",
      },
    ],
    faqs: [
      {
        question: "Can you upholster both fabric and leather furniture?",
        answer:
          "Yes. We can refresh furniture with new fabric or leather, and help you choose the one that suits your room and how you use the piece.",
      },
      {
        question: "When is upholstery replacement a good idea?",
        answer:
          "It works well when the frame is sturdy but the covering is worn, faded, torn or simply out of style. If the frame itself is badly damaged, we will tell you.",
      },
      {
        question: "Can you re-cover dining chairs and armchairs too?",
        answer:
          "Yes. We work on sofas, armchairs and dining chairs, not only large sofas.",
      },
      {
        question: "How do I get started with sofa upholstery?",
        answer:
          "Send photos of your sofa or chairs on WhatsApp, or call us on +91 76760 45748. Tell us what you would like changed and we will guide you from there.",
      },
    ],
    related: ["furniture-repair", "furniture-redesign", "wooden-furniture-restoration"],
  },
  {
    slug: "furniture-repair",
    title: "Furniture Repair",
    pageTitle: "Furniture Repair",
    description: "Address damaged joints, frames, surfaces and everyday structural wear.",
    image: "/images/blog/post-4-card.jpg",
    banner: "/images/banners/service-repair.jpg",
    cover: "/images/blog/post-4-cover.jpg",
    imageAlt: "Sofa and wooden coffee table in a living room",
    metaTitle: "Furniture Repair Services in Bangalore",
    metaDescription:
      "Furniture repair services in Bangalore. We fix loose joints, wobbly chairs, damaged frames and worn surfaces so your furniture is sturdy again.",
    keywords: [
      "Furniture Repair Services in Bangalore",
      "wobbly chair repair Bangalore",
      "broken furniture repair",
      "furniture structural repair",
      "loose joint repair",
      "table and cabinet repair Bangalore",
    ],
    heading: "Furniture repair services in Bangalore",
    overview: [
      "Furniture takes a lot of daily wear. Chairs get pulled in and out, tables carry weight, and doors and drawers open and close hundreds of times. Sooner or later something gives. Most of the time, the damage can be put right.",
      "We repair and strengthen furniture so it is safe and comfortable to use again. We look for the cause of the problem, repair it properly and, where needed, finish the repair so it blends in. A repair is also the right first step before any polish, paint or upholstery work, because a new finish only lasts on a piece that is sound underneath.",
      "Our Bangalore furniture repair service starts with photos or a description of the damage. We confirm the repair scope before work so you know what is being fixed.",
    ],
    scopeHeading: "Furniture repair for frames, joints and surfaces",
    scopeIntro:
      "The aim of furniture repair is to restore strength and use, not simply hide damage. We identify whether a chair is wobbling because of a loose joint, a cracked frame or a damaged leg, then secure or reinforce the correct area before any surface finish is renewed.",
    idealFor: [
      "Wobbly chairs and tables with loose or separated joints",
      "Chairs, sofas or wooden furniture with damaged supports",
      "Furniture with dents, chips or surface damage",
      "Pieces that need structural repair before polishing or upholstery",
    ],
    blogLinks: [
      ["common-furniture-repairs", "Guide to loose joints, wobbly chairs and worn frames"],
      ["restore-or-replace-old-furniture", "Repair or replace old furniture: how to decide"],
      ["how-furniture-polishing-brings-back-the-shine", "Why wooden furniture needs a sound base before polishing"],
    ],
    materials: [
      "Wooden chairs, tables, cabinets and frames",
      "Sofa and armchair frames",
      "Loose joints, legs, supports and surface damage",
    ],
    problems: [
      "Loose joints and wobbling chairs or tables",
      "Cracked or weakened frames",
      "Damaged legs, arms and supports",
      "Chips, dents and scratches on surfaces",
      "Drawers and doors that no longer fit or close well",
      "Furniture that has been damaged through everyday use",
    ],
    includes: [
      "Finding the cause of the problem",
      "Tightening and securing loose joints",
      "Repairing or reinforcing frames and damaged parts",
      "Repairing surface damage",
      "Finishing the repair so it blends with the piece",
    ],
    benefits: [
      {
        title: "Furniture that is sturdy again",
        text: "A proper repair makes a wobbly or weak piece feel solid and safe to use.",
      },
      {
        title: "Keep the piece you own",
        text: "Fixing damage is often all it takes to avoid replacing a piece you like.",
      },
      {
        title: "A solid base for any makeover",
        text: "Repair makes sure later polish, paint or upholstery lasts.",
      },
      {
        title: "Fewer problems later",
        text: "Dealing with damage early helps stop small faults becoming bigger ones.",
      },
    ],
    faqs: [
      {
        question: "What kinds of furniture damage can you repair?",
        answer:
          "We repair loose joints, wobbly legs, damaged frames, surface damage and similar everyday wear on wooden furniture and on the frames of sofas and chairs. Send us a photo and we will tell you what is involved.",
      },
      {
        question: "Can a wobbly chair or table really be fixed?",
        answer:
          "In most cases, yes. Wobbling usually comes from loose joints or worn parts, which can be secured or repaired.",
      },
      {
        question: "Can you repair the furniture and refinish it at the same time?",
        answer:
          "Yes. Repair is often combined with polishing, refinishing or upholstery so that you get a piece that is both sound and good-looking.",
      },
      {
        question: "How do I book a furniture repair in Bangalore?",
        answer:
          "Call us on +91 76760 45748 or send photos on WhatsApp with a short note about what is wrong, and we will get back to you.",
      },
    ],
    related: ["wooden-furniture-restoration", "furniture-polishing", "sofa-and-chair-upholstery"],
  },
  {
    slug: "furniture-polishing",
    title: "Furniture Polishing",
    pageTitle: "Furniture Polishing",
    description: "Renew wood surfaces with a clean finish that brings back natural richness.",
    image: "/images/blog/post-1-card.jpg",
    banner: "/images/banners/service-polishing.jpg",
    cover: "/images/blog/post-3-cover.jpg",
    imageAlt: "Polished wooden dining table with chairs",
    metaTitle: "Furniture Polishing in Bangalore",
    metaDescription:
      "Furniture polishing in Bangalore. Bring back the shine and natural colour of your wooden tables, chairs, doors and cabinets. Share photos for a quote.",
    keywords: [
      "Furniture Polishing in Bangalore",
      "wood polishing services Bangalore",
      "table polishing Bangalore",
      "wooden furniture polish",
      "wooden door and cabinet polishing",
      "polish old wooden furniture",
    ],
    heading: "Furniture polishing in Bangalore",
    overview: [
      "Wood looks best when its finish is in good condition. Over time the surface of wooden furniture loses its shine, picks up marks and darkens unevenly. Polishing renews the finish and shows off the natural colour and grain of the wood again.",
      "We prepare the surface, deal with marks and uneven areas, and apply a fresh finish. Whether it is a dining table that has lost its gloss, a cabinet that looks tired or a set of chairs that no longer match, polishing is one of the simplest ways to make wooden furniture look cared for.",
      "Customers in Bangalore can share photos of the affected surface so we can check whether polishing is enough or whether repair and refinishing are needed first.",
    ],
    scopeHeading: "Wood polishing for dull and marked surfaces",
    scopeIntro:
      "Furniture polishing restores the top finish of suitable wooden furniture. It is a better choice than refinishing when you want to keep the natural colour and grain, while deeper scratches, cracks or peeling polish may need furniture repair or a complete refinishing process.",
    idealFor: [
      "Dining and coffee tables with dull or marked tabletops",
      "Wooden cabinets, doors and shelves with uneven shine",
      "Chairs and beds that need a renewed but natural wood finish",
      "Surfaces suitable for polishing rather than a new paint colour",
    ],
    blogLinks: [
      ["how-furniture-polishing-brings-back-the-shine", "What furniture polishing does and what it does not"],
      ["refinishing-vs-repainting-furniture", "When polishing is not the right finish"],
      ["common-furniture-repairs", "Check whether surface damage also needs repair"],
    ],
    materials: [
      "Dining tables and coffee tables",
      "Wooden chairs, beds and cabinets",
      "Doors, shelves and other finished wooden surfaces",
    ],
    problems: [
      "Wood that looks dull, dry or lifeless",
      "Uneven colour and patchy finish",
      "Surface marks, light scratches and stains",
      "A worn, sticky or damaged old polish",
      "Tabletops that have lost their shine",
      "Wooden furniture that looks tired next to the rest of your home",
    ],
    includes: [
      "Checking the wood and the existing finish",
      "Cleaning and preparing the surface",
      "Dealing with marks and uneven areas",
      "Applying a fresh polish or finish",
      "Final check so the surface is even and smooth",
    ],
    benefits: [
      {
        title: "Bring back natural warmth",
        text: "A fresh finish shows off the colour and grain of the wood.",
      },
      {
        title: "A cleaner, more even surface",
        text: "Marks and worn patches are treated so the piece looks consistent.",
      },
      {
        title: "A quick way to refresh a room",
        text: "Polished furniture can lift a whole space without any new purchases.",
      },
      {
        title: "Helps protect the surface",
        text: "A good finish helps wooden furniture stand up to everyday use.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between polishing and refinishing?",
        answer:
          "Polishing renews the finish and keeps the look of the wood. Refinishing or repainting goes further and can change the colour or style of the piece. We can help you decide which one suits your furniture.",
      },
      {
        question: "Which furniture can be polished?",
        answer:
          "Wooden tables, chairs, beds, cabinets, wardrobes, doors and similar pieces. If you are not sure, send us a photo.",
      },
      {
        question: "Can polishing fix scratches?",
        answer:
          "Light marks and surface wear can often be improved. Deeper damage may need repair first, and we will tell you what the piece needs.",
      },
      {
        question: "How can I get my furniture polished in Bangalore?",
        answer:
          "Send photos on WhatsApp or call +91 76760 45748 and tell us which pieces you would like polished.",
      },
    ],
    related: ["wooden-furniture-restoration", "furniture-refinishing", "furniture-repair"],
  },
  {
    slug: "furniture-refinishing",
    title: "Furniture Refinishing",
    pageTitle: "Furniture Refinishing & Repainting",
    description: "Repaint or refinish furniture to suit a new look and your interior.",
    image: "/images/blog/post-5-card.jpg",
    banner: "/images/banners/service-refinishing.jpg",
    cover: "/images/blog/post-5-cover.jpg",
    imageAlt: "Living room with a sofa, cushions and a glass coffee table",
    metaTitle: "Furniture Refinishing & Repainting in Bangalore",
    metaDescription:
      "Furniture refinishing and repainting in Bangalore. Change the colour and finish of your old furniture to suit your interiors. Share photos to get a quote.",
    keywords: [
      "Furniture Refinishing Services in Bangalore",
      "furniture repainting Bangalore",
      "furniture painting services",
      "repaint wooden furniture",
      "change furniture colour",
      "furniture finish change",
    ],
    heading: "Furniture refinishing and repainting in Bangalore",
    overview: [
      "When furniture is sound but no longer suits your home, a new finish can change it completely. Refinishing renews or replaces the existing finish and keeps the look of the material. Repainting changes the colour altogether.",
      "We prepare the piece properly, then apply the finish or paint you have chosen. It is a practical way to match furniture to a new colour scheme, update an older design or simply replace a finish that has worn out. The result is furniture that fits your interiors without the cost and effort of buying new.",
      "For Bangalore homes, we discuss the intended room and use so the finish is suitable for the piece rather than simply applying a new colour.",
    ],
    scopeHeading: "Refinishing and repainting with proper preparation",
    scopeIntro:
      "Refinishing means renewing or replacing the existing finish while repainting applies a new colour or opaque style. The correct process depends on the wood, the existing coating and the result you want. Surface damage and loose joints must be addressed before a lasting finish can be applied.",
    idealFor: [
      "Wooden furniture that needs a new colour or coordinated finish",
      "Tired tables, chairs or cabinets that are structurally sound",
      "Matching sets or pieces that need one consistent colour",
      "Furniture where polishing will not achieve the desired look",
    ],
    blogLinks: [
      ["refinishing-vs-repainting-furniture", "Refinishing versus repainting: which should you choose"],
      ["modern-makeover-for-outdated-furniture", "Modern furniture makeover ideas"],
      ["how-furniture-polishing-brings-back-the-shine", "How polishing differs from changing the finish"],
    ],
    materials: [
      "Wooden tables, chairs, cabinets and storage",
      "Suitable solid-surface furniture pieces",
      "Natural, stained or painted finishes",
    ],
    problems: [
      "A colour or finish that no longer suits your interiors",
      "Old paint that is chipped or peeling",
      "A worn finish that cannot simply be polished",
      "Furniture that does not match the rest of your room",
      "Mismatched pieces you would like to coordinate",
      "Dated furniture that is otherwise in good condition",
    ],
    includes: [
      "Discussing the colour and finish you would like",
      "Preparing the surface and removing the old finish where needed",
      "Repairing surface damage before finishing",
      "Applying the new finish or paint",
      "Final finishing and checking the result",
    ],
    benefits: [
      {
        title: "A new colour for old furniture",
        text: "Change the look of a piece to match your interiors.",
      },
      {
        title: "Refresh without replacing",
        text: "Keep sound furniture and give it a fresh, coordinated finish.",
      },
      {
        title: "Match pieces across a room",
        text: "A common finish helps different pieces look like they belong together.",
      },
      {
        title: "Suitable for many pieces",
        text: "Tables, chairs, cabinets and storage can all be given a new finish.",
      },
    ],
    faqs: [
      {
        question: "Should I refinish or repaint my furniture?",
        answer:
          "Choose refinishing if you like the look of the wood and want it renewed. Choose repainting if you want a different colour or style. Send us a photo and we will suggest what suits the piece.",
      },
      {
        question: "Can you paint furniture in a colour that matches my room?",
        answer:
          "Yes. Tell us the colour or style you have in mind and we will work with you on the finish.",
      },
      {
        question: "Will you repair damage before refinishing or repainting?",
        answer:
          "Where the piece needs it, yes. A new finish only lasts on a sound surface, so repair and preparation come first.",
      },
      {
        question: "How do I request furniture refinishing in Bangalore?",
        answer:
          "Share photos on WhatsApp or call us on +91 76760 45748 and tell us the look you are after.",
      },
    ],
    related: ["furniture-polishing", "furniture-redesign", "wooden-furniture-restoration"],
  },
  {
    slug: "furniture-redesign",
    title: "Furniture Redesign",
    pageTitle: "Furniture Redesign & Makeover",
    description: "Modernise outdated furniture through thoughtful design and makeover work.",
    image: "/images/blog/post-6-card.jpg",
    banner: "/images/banners/service-redesign.jpg",
    cover: "/images/blog/post-6-cover.jpg",
    imageAlt: "Modern living room with a sofa and brick wall",
    metaTitle: "Furniture Redesign & Old Furniture Makeover in Bangalore",
    metaDescription:
      "Old furniture makeover and redesign in Bangalore. We modernise outdated furniture so it suits your home. Share photos of your piece to get started.",
    keywords: [
      "Old Furniture Makeover in Bangalore",
      "furniture redesign Bangalore",
      "furniture renovation in Bangalore",
      "Furniture Refurbishing in Bangalore",
      "modernise old furniture",
      "furniture makeover ideas",
    ],
    heading: "Furniture redesign and makeover in Bangalore",
    overview: [
      "Tastes and homes change, and furniture that once suited a room can start to feel out of place. That does not mean it has to go. A makeover can change the finish, the fabric and the overall look of a piece so it fits your home as it is today.",
      "We look at the piece, the room it belongs in and how you want to use it, then plan a makeover that makes sense. It might be a new finish, a new covering or a mix of changes. The idea is simple: instead of replacing old furniture, let us transform it into something you would love to use and show off.",
      "Our furniture redesign and makeover service in Bangalore begins with photos and a clear description of the look you want, followed by an assessment of what can be changed.",
    ],
    scopeHeading: "A complete furniture makeover planned around the piece",
    scopeIntro:
      "Furniture redesign can combine repair, upholstery, refinishing and colour changes. We assess the condition and style first, then recommend changes that suit the room and keep the work practical. A makeover should solve the look and, where needed, restore the structure of the furniture.",
    idealFor: [
      "Old furniture that is useful but visually outdated",
      "Pieces with a sound structure that need a coordinated new look",
      "Sofas or chairs that need both upholstery and visual updating",
      "Wooden furniture that needs a new finish and repair work",
    ],
    blogLinks: [
      ["modern-makeover-for-outdated-furniture", "How to give outdated furniture a modern makeover"],
      ["restore-or-replace-old-furniture", "Restore or replace: make the decision with confidence"],
      ["refinishing-vs-repainting-furniture", "Choosing between refinishing and repainting"],
    ],
    materials: [
      "Wooden furniture needing a finish or colour change",
      "Sofas and chairs needing upholstery or refinishing",
      "Good-condition pieces that need a coordinated makeover",
    ],
    problems: [
      "Outdated furniture that no longer suits your style",
      "Pieces that do not fit with your newer interiors",
      "Furniture in good condition but with a dated look",
      "Heavy or old-fashioned designs you would like to modernise",
      "Inherited pieces you want to keep in a fresher form",
      "Mismatched furniture you would like to bring together",
    ],
    includes: [
      "Talking through the room, the piece and the look you want",
      "Planning the changes to the finish, covering or details",
      "Repair of any damage that needs attention first",
      "Carrying out the makeover work",
      "Final finishing so the piece is ready for your home",
    ],
    benefits: [
      {
        title: "Furniture that fits your home today",
        text: "Update the look of a piece so it suits your current interiors.",
      },
      {
        title: "Keep what you value",
        text: "Hold on to pieces with sentimental or practical value in a fresher form.",
      },
      {
        title: "A smarter way to refresh a home",
        text: "A makeover can change a room without replacing everything in it.",
      },
      {
        title: "A result planned around you",
        text: "The work is shaped by your room, your taste and how you use the furniture.",
      },
    ],
    faqs: [
      {
        question: "What does a furniture makeover involve?",
        answer:
          "It depends on the piece. A makeover can include a new finish or paint, new upholstery, repairs and other changes that give the furniture a more modern look.",
      },
      {
        question: "Can you redesign a piece to match my new interiors?",
        answer:
          "Yes. Tell us about your room and the style you like, and we will suggest how the piece can be updated to suit it.",
      },
      {
        question: "Is a makeover better than buying new furniture?",
        answer:
          "If the piece is well built and you like its shape, a makeover can be a practical option. If it is not worth saving, we will say so.",
      },
      {
        question: "How do I start an old furniture makeover in Bangalore?",
        answer:
          "Send photos of the furniture on WhatsApp or call +91 76760 45748 and tell us what you would like it to look like.",
      },
    ],
    related: ["furniture-refinishing", "sofa-and-chair-upholstery", "wooden-furniture-restoration"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
