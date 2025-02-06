// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/samuelgarcin.github.io/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/samuelgarcin.github.io/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/samuelgarcin.github.io/cv/";
          },
        },{id: "news-i-ll-be-presenting-my-most-recent-project-at-the-neurips-aloe-workshop-in-new-orleans-this-week",
          title: 'I’ll be presenting my most recent project at the NeurIPS ALOE workshop in...',
          description: "",
          section: "News",},{id: "news-the-rl-reading-group-past-talks-have-moved-to-our-group-s-youtube-channel-you-can-find-the-playlist-here-live-talks-will-still-be-on-teams-but-we-ll-be-uploading-the-recordings-there",
          title: 'The RL reading group past talks have moved to our group’s YouTube channel!...',
          description: "",
          section: "News",},{id: "news-i-wrote-a-blog-post-on-unsupervised-environment-design-the-post-acts-as-a-general-intro-to-ued-discusses-how-and-when-it-can-be-useful-and-when-sister-approaches-like-data-regularised-environment-design-are-more-appropriate-e-g-when-you-care-more-about-zero-shot-transfer-than-open-endedness",
          title: 'I wrote a blog post on Unsupervised Environment Design. The post acts as...',
          description: "",
          section: "News",},{id: "news-i-ll-be-in-toronto-for-the-dlrl-summer-school-july-8-17th",
          title: 'I’ll be in Toronto for the DLRL Summer School (July 8-17th).',
          description: "",
          section: "News",},{id: "news-i-ll-be-in-vienna-later-this-month-to-present-data-regularised-environment-design-at-icml-email-me-if-you-d-like-to-meet-up",
          title: 'I’ll be in Vienna later this month to present Data Regularised Environment Design...',
          description: "",
          section: "News",},{id: "news-i-am-starting-an-internship-at-microsoft-research-beijing-i-will-be-working-with-kaixin-wang-on-world-models-and-their-potential-to-help-training-the-next-generation-of-rl-agents",
          title: 'I am starting an internship at Microsoft Research Beijing. I will be working...',
          description: "",
          section: "News",},{id: "news-studying-the-interplay-between-the-actor-and-critic-representations-in-reinforcement-learning-got-accepted-to-iclr-25-tada-see-you-in-singapore-this-april",
          title: 'Studying the Interplay Between the Actor and Critic Representations in Reinforcement Learning got...',
          description: "",
          section: "News",},{id: "news-i-will-present-studying-the-interplay-between-the-actor-and-critic-representations-in-reinforcement-learning-at-the-uoe-rl-rg-on-feb-13th",
          title: 'I will present Studying the Interplay Between the Actor and Critic Representations in...',
          description: "",
          section: "News",},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/374209847446601728", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/francelico", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/samuel-garcin-7469b9b1", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LY331OgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SamuelGarcin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
