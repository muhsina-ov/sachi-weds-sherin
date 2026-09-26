/**
 * wedding-data.js — Customer-facing editable data layer for sage-parchment
 * Edit this file to update couple names, wedding dates, multi-day itinerary, love story, venue, RSVP form, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sachi",
    brideShort: "Sachi",
    groom: "Sherin",
    groomShort: "Sherin",
    hashtag: "#SachiWedsSherin",
  },

  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding celebrations",
  },

  event: {
    title: "The Wedding of Sachi & Sherin",
    startsAt: "2027-01-31T12:00:00+05:30",
    endsAt: "2027-02-02T23:30:00+05:30",
    dateLabel: "31 Jan – 02 Feb 2027",
    dayLabel: "Sunday – Tuesday",
    timeLabel: "Celebrations begin at 12:00 in the afternoon",
    dressCode: "Indian Traditional (avoid blue on Haldi; avoid white/red on Wedding)",
    note: "Lunch and dinner to follow ceremonies",
  },

  // Multi-day Wedding Itinerary
  events: [
    {
      day: "Day 1",
      dateLabel: "31 . 01 . 2027",
      dayLabel: "Sunday",
      title: "Haldi Ceremony",
      startsAt: "2027-01-31T12:00:00+05:30",
      endsAt: "2027-01-31T16:00:00+05:30",
      schedule: [
        { time: "12:00 PM", title: "Haldi Ceremony" },
        { time: "01:30 PM", title: "Lunch to follow" },
      ],
      dressCode: "Indian Traditional (Please avoid blue)",
      note: "Join us in yellow and vibrant shades as we kick off the celebrations with love & turmeric!",
    },
    {
      day: "Day 2",
      dateLabel: "01 . 02 . 2027",
      dayLabel: "Monday",
      title: "Grah Shanti & Sangeet",
      startsAt: "2027-02-01T10:00:00+05:30",
      endsAt: "2027-02-01T23:30:00+05:30",
      schedule: [
        { time: "10:00 AM", title: "Groom’s Grah Shanti" },
        { time: "12:30 PM", title: "Lunch to follow" },
        { time: "06:00 PM", title: "Garba & Sangeet" },
        { time: "08:30 PM", title: "Dinner to follow" },
      ],
      dressCode: "Festive Indian Attire / Traditional",
      note: "An evening of dandiya, garba, music, and joyful dancing!",
    },
    {
      day: "Day 3",
      dateLabel: "02 . 02 . 2027",
      dayLabel: "Tuesday",
      title: "The Wedding Day",
      startsAt: "2027-02-02T09:00:00+05:30",
      endsAt: "2027-02-02T23:30:00+05:30",
      schedule: [
        { time: "09:00 AM", title: "Bride’s Grah Shanti" },
        { time: "04:00 PM", title: "Baarat" },
        { time: "07:00 PM", title: "Wedding Ceremony" },
      ],
      dressCode: "Indian Traditional (Please avoid white and red)",
      note: "Witness our sacred vows followed by dinner and celebratory reception.",
    },
  ],

  // RSVP Form Configuration
  rsvp: {
    kicker: "Kindly Respond",
    title: "RSVP",
    deadline: "Please respond at your earliest convenience",
    text: "Your presence and blessings mean the world to us as we embark on this sacred journey together. Please let us know if you will be attending by completing our Google Form below.",
    buttonText: "RSVP via Google Form",
    url: "https://docs.google.com/forms", // You can paste your exact Google Form link here (e.g., https://forms.gle/...)
  },

  venue: {
    name: "Jalsa",
    address: "Songadh - Surat, Tajpor Khurd, Gujarat 394620",
    mapsQuery: "445V+JR7 Jalsa Agri Tech, Songadh - Surat, Tajpor Khurd, Gujarat 394620, India",
    url: "https://maps.app.goo.gl/MDzrWzL7FKH2hgx27?g_st=com.google.maps.preview.copy",
    lat: 21.17,
    lng: 73.08,
  },

  story: [
    {
      year: "Chapter I",
      title: "Lost in New York",
      text: "At a time when we were both building a life in New York, it was easy to feel lost, stressed, and overwhelmed. And then, we met.",
      image: "story-1",
    },
    {
      year: "Chapter II",
      title: "Pieces of the Puzzle",
      text: "From the first meeting, there was an instant sense of connection. Getting to know each other was like solving a puzzle; as each piece came together, it all made sense in the end.",
      image: "story-2",
    },
    {
      year: "Chapter III",
      title: "Finding Our Way Home",
      text: "As our relationship evolved, we realized that the sense of home we were looking for in New York was something we found in each other. This little love story has been a journey of finding home.",
      image: "story-3",
    },
  ],

  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "Two souls, one destiny — and a lifetime of love, laughter, and home found in each other.",
    source: "A Vedic blessing from both families",
  },

  footer: {
    families: "With love & warm wishes from the Families",
    contacts: [],
  },

  images: {
    gatePanel: "./editable/assets/gate-panel.jpg",
    heroArch: "./editable/assets/hero-arch.jpg",
    mapPreview: "./editable/assets/map-preview.jpg",
    lotus: "./editable/assets/lotus.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    story1: "./editable/assets/story-1.jpg",
    story2: "./editable/assets/story-2.jpg",
    story3: "./editable/assets/story-3.jpg",
  },
};
