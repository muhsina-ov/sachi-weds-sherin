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
    hashtag: "",
  },

  invite: {
    kicker: "Please Join Us",
    line: "cordially invite you to celebrate their wedding celebrations",
  },

  event: {
    title: "The Wedding of Sachi & Sherin",
    startsAt: "2027-01-31T12:00:00+05:30",
    endsAt: "2027-02-02T23:30:00+05:30",
    dateLabel: "31st Jan – 2nd Feb 2027",
    dayLabel: "31st Jan - 2nd Feb",
    timeLabel: "Celebrations begin in Bardoli, Gujarat",
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
      startsAt: "2027-01-31T14:00:00+05:30",
      endsAt: "2027-01-31T18:00:00+05:30",
      schedule: [
        { time: "02:00 PM", title: "Haldi Ceremony" },
      ],
      dressCode: "Indian Traditional (Please avoid blue)",
      note: "",
    },
    {
      day: "Day 2",
      dateLabel: "01 . 02 . 2027",
      dayLabel: "Monday",
      title: "Groom's Grah Shanthi & Sangeeth",
      startsAt: "2027-02-01T10:00:00+05:30",
      endsAt: "2027-02-01T23:30:00+05:30",
      schedule: [
        { time: "10:00 AM", title: "Groom's Grah Shanthi" },
        { time: "06:00 PM", title: "Garba & Sangeeth" },
      ],
      dressCode: "Festive Indian Attire / Traditional",
      note: "",
    },
    {
      day: "Day 3",
      dateLabel: "02 . 02 . 2027",
      dayLabel: "Tuesday",
      title: "The Wedding Day",
      startsAt: "2027-02-02T09:00:00+05:30",
      endsAt: "2027-02-02T23:30:00+05:30",
      schedule: [
        { time: "09:00 AM", title: "Bride's Grah Shanti" },
        { time: "04:00 PM", title: "Baarat" },
        { time: "07:00 PM", title: "Wedding Ceremony" },
      ],
      dressCode: "Indian Traditional (Please avoid white and red)",
      note: "",
    },
  ],

  // RSVP Form Configuration
  rsvp: {
    kicker: "Kindly Respond",
    title: "RSVP",
    deadline: "Please respond at your earliest convenience",
    text: "Your presence and blessings mean the world to us as we embark on this sacred journey together. Please let us know if you will be attending by completing our Google Form below.",
    buttonText: "RSVP via Google Form",
    url: "https://forms.gle/ptG3nhcbGvBUhmvt5",
  },

  venue: {
    name: "Bardoli, India",
    address: "Jalsa Party Plot, Gujarat, 394620",
    mapsQuery: "Jalsa Party Plot, Tajpor Khurd, Bardoli, Gujarat 394620, India",
    url: "https://maps.app.goo.gl/MDzrWzL7FKH2hgx27?g_st=com.google.maps.preview.copy",
    lat: 21.17,
    lng: 73.08,
  },

  story: [
    {
      year: "Our Story",
      title: "Finding Our Way Home",
      text: "At a time when we were both building a life in New York, it was easy to feel lost, stressed, and overwhelmed. And then, we met. From the first meeting, there was an instant sense of connection. Getting to know each other was like solving a puzzle; as each piece came together, it all made sense in the end. As our relationship evolved, we realized that the sense of home we were looking for in New York was something we found in each other. This little love story has been our journey of finding home.",
      image: "story-1",
    },
  ],

  blessing: null,

  footer: {
    families: "With love & warm wishes from the Families",
    contacts: [],
  },

  images: {
    ogImage: "./og-image.jpg",
    gatePanel: "./editable/assets/gate-panel.jpg",
    heroArch: "./editable/assets/hero-arch.jpg",
    mapPreview: "./editable/assets/map-preview.jpg",
    lotus: "./editable/assets/lotus.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    story1: "./editable/assets/story-1.jpg",
    story2: "./editable/assets/story-2.jpg",
    story3: "./editable/assets/story-3.jpg",
  },

  meta: {
    title: "Sachi & Sherin — Wedding Invitation",
    description: "Sachi and Sherin invite you to celebrate their wedding from 31st Jan to 2nd Feb, 2027 in Bardoli, India.",
    url: "https://sachi-weds-sherin.invitingyou.top/",
    image: "https://sachi-weds-sherin.invitingyou.top/og-image.jpg",
    siteName: "Sachi & Sherin Wedding",
  },
};
