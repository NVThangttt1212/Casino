import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedServiceService } from '../../../shared-service.service';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  @ViewChild('contentRanking') contentRanking!: ElementRef;
  @ViewChild('blogContent') blogContentRef!: ElementRef;

  getApi(): Observable<any> {
    return of( [
      {her: '#HTC', name: '1. How to choose a casino'},
      {her: '#TCU', name: '2. Criteria used in our ratings'},
      {her: '#HWS', name: '3. How we sort casinos'},
      {her: '#WHC', name: '4. Casinos for specific countriesc'},
      {her: '#Filters', name: '5. Advanced casino filters'},
    ])
  }

  nameMenus = [
    {her: '#HTC', name: '1. How to choose a casino'},
    {her: '#TCU', name: '2. Criteria used in our ratings'},
    {her: '#HWS', name: '3. How we sort casinos'},
    {her: '#WHC', name: '4. Casinos for specific countriesc'},
    {her: '#Filters', name: '5. Advanced casino filters'},
  ]

  apiBlogHTC = [{
      id:'HTC',
      Heading: 'How to choose a good, secure and honest online casino',
      description: 'Choosing a good online casino which meets all your requirements is not as easy as it sounds. To make your life easier we have created a short list of criteria you should always consider:',

      list: [
        'The casino accepts players from your country',
        'Good casino reputation (evaluated by our casino review team - pick casinos with GOOD and PERFECT ratings)',
        'License from a respected re',
        'Reasonably high revenues compared to your highest possible wins',
        'High-enough withdrawal limits (compared to your highest possible wins)',
        'A selection of your favorite games (use the Game Provider filter on the right)',
        'Customer support and website localized in your native language',
        'Fast and helpful customer support',
        'Attractive and fair bonuses',
        'Suitable deposit and withdrawal options (use the Payment Method filter on the right)',
        'Intuitive and nice website',
        'Support for mobile devices',
      ],

    }]

  apiBlogTCU = [{
    id:'TCU',
    Heading: ' The criteria used for calculating our online casino ratings',
    description: [
      'Soon after we started Casino.Guru as a project, we realized that we needed to rate online casinos based on objective criteria. Trying the casino on our own isn’t enough to get a representative experience, and we would have to win huge amounts in every casino we reviewed to prove that they pay out on big winnings. That is just not possible.',
      'That’s why our reviews are based on the experience of other players, sourced from rigorous research of various forums, mediation websites and other sources. It’s not an easy task to judge who was right in the case of complaints which remain unresolved. But in the end, we usually get an impression of how the casino treats its players.',
      'My basic formula for the casino reputation rating considers the:',

    ],

    list: [
        'Number of complaints where we think the casino wasn’t acting fair',
        'Amount of money involved in these cases',
        'Number of casino visitors, its estimated revenues and how long the casino operates',

      ],
  }]

  apiBlog = [{
    id:'',
    Heading: 'Writing honest casino reviews takes a lot of time',
    description: [
      'Yes, it does. For casinos with a long track record it can take up to 20 hours. Our independent casino review team members read everything they are able to find on the internet. They read all forums, mediation websites or reviews posted by real users.',
      ' We are trying to save your time. Any case that falls foul of our fair gambling codex is summarized in our casino review.',

    ],

    list: [
        'Number of complaints where we think the casino wasn’t acting fair',
        'Amount of money involved in these cases',
        'Number of casino visitors, its estimated revenues and how long the casino operates',

      ],
  }]

  apiBlogHWS = [{
    id:'HWS',
    Heading: 'How we sort the casinos using our recommendation system',
    description: [
      'The list of casinos you can see here is our best guess for casinos which may suit your needs and preferences.',
      'At first, we intentionally omit casinos which don’t accept players from your country. It makes no sense to point you to them, right?',
      ' Secondly, we display casinos which we know are a great fit for a certain country in the top positions.',
      'Thirdly, we prefer casinos which are localized to your native language or offer customer support in that language. Communication in a native language is, for many players, a more comfortable experience, and if a casino is localized, it will more likely understand the specific needs of players from your country.S',
      ' However, the localization ranking is already mixed with the reputation ranking. So we display higher non-localized casinos with PERFECT reputation over localized casinos with a BAD track-record.',
      'On top of that, we use various other minor ranking criteria. But ultimately, if you want to find the best casino for you as quickly as possible, the easiest way is to use the filters on the right and filter the casinos based on your own criteria.',
    ],

    note: [{
        img: './assets/img/Group.png',
        textNote: 'Note: If we haven’t guessed your country or your native language correctly, you can change them by clicking on the flag in the top left corner in the main menu.',
        }],

  }]

  apiBlogWHC = [{
    id:'WHC',
    Heading: 'How to find the best casino for your country',
    description: [
      'As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.',
      'We put a lot of effort into having our casino database up to date, including the countries from which each casino accepts players. That said, there are also websites specialized in individual countries, on which you can find country-specific lists of casinos. You can find some of them below.',
    ],

    list: [
      {Heading:'United Kingdom', content: 'Players from the United Kingdom can choose from a big number of great casinos, with one of the best gambling licensing authorities (UK Gambling Commission) governs all gambling activities in the country. You can check out our list of UK online casinos, or dedicated websites like kingcasinobonus.co.uk which specializes in casino bonuses for UK players, but also has a list of best casinos for players from the UK.'},
      {Heading: 'Italy', content: 'Gambling in Italy is legal and regulated from 2011, when a new gambling law has been introduced. Italian players can browse online casinos and casino bonuses right here on Casino Guru, either in English, or by visiting the version of our website localised for the Italian market available at casinoguru-it.com.'},
      {Heading: 'Greece', content:"The Greek gambling market is strongly influenced by the countrys intention to keep the state-run OPAP a monopoly, which, however, violates EU laws. Greeces gambling laws are being amended and it's expected that other online casinos will be able to get official Greek licenses again. Greek players can find relevant online casinos on gr.casino.guru."},
      {Heading: 'Czech Republic', content: 'Czech Republic has introduced a new Gambling Act back in 2017, which governs all online gambling operators who wish to legally target Czech players. Players from Czech Republic can find relevant online casinos on the Czech version on Casino Guru available at kasinoguru-cz.com.'},
    ],
  }]

  apiBlogFillter=[{
    id:'Filters',
    heading: "Filters you can use to find the right casino faster",
    description:"The filtering options are one of the technically strongest features of the Casino Guru website. It took a lot of effort to design and implement them. They are our gift for the advanced users who know what they are searching for and for those who want to get the most relevant results as quickly as possible.",
    list:[
      {
        img: './assets/img/check.png',
        heading: 'For players from',
        text: " - the casinos that accept players from one of the selected countries"
      },
      {
        img: './assets/img/check.png',
        heading: 'Casino Games',
        text: "- the casinos that accept players from one of the selected countries",
      },
      {
        img: './assets/img/check.png',
        heading: 'Game provider',
        text: "- The casinos that offer deposits or withdrawals with at least one of selected payment providers",
      },
      {
        img: './assets/img/check.png',
        heading: 'Payment method',
        text: " - The casinos that offer deposits or withdrawals with at least one of selected payment providers"
      },
      {
        img: './assets/img/check.png',
        heading: 'Licensing authority',
        text: "- Licensing authority – Pick only the casinos that operate under a certain license"
      },
      {
        img: './assets/img/check.png',
        heading: 'Safe amount to win',
        text: "- Use this filter to get financially strong casinos with lots of players"
      },
      {
        img: './assets/img/check.png',
        heading: 'Withdrawal limit',
        text: "- If you plan to win big, you’ll need a high withdrawal limit to cash out your win quickly and without any issues"
      },
      {
        img: './assets/img/check.png',
        heading: 'Currency',
        text: "This filter is for you if you prefer to play in your local currency"
      },
      {
        img: './assets/img/check.png',
        heading: 'Mobile Devices',
        text: "- Find casinos which support players with smartphones and tablets"
      },
      {
        img: './assets/img/check.png',
        heading: 'Website language',
        text: "- The casinos with a localized website"
      },
      {
        img: './assets/img/check.png',
        heading: 'Customer support language',
        text: "- The casinos that are able to at least react to support questions in your native language"
      },
      {
        img: './assets/img/check.png',
        heading: 'Live chat language',
        text: "- Find the casinos that have a live chat in your native language (which is the most convenient way to solve any problems or questions)"
      },
    ]

  }]

  apitable = [
    {
     title: ['Good behavior', 'Points', 'Spent'],
     row:[
      { colum1:'Complete a side-project',colum2: '+1', colum3:'1.248.4000' },
      { colum1:'Report a useful feedback (upon your verification)',colum2:'+2', colum3:'11.396.302'},
      { colum1:'Report an illegal download source (upon your mind)',colum2: '+1', colum3: '89.393'},
      { colum1:'Share your experience',colum2: '+2', colum3: '11.396.302'},
      { colum1:'Deploy a design system',colum2: '+1', colum3: '16.719'},

    ]}]

  apiFAQ = [
    { headingMain: 'FAQ - Frequently Asked Questions & Answers',
      description: ' As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.',
      sub: [
        {
          heading: 'How do I know the sites I am gambling at are safe?',
          content: 'As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.'
        },
        {
          heading:'What are my options when making an online casino deposit?',
          content:'As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.',
        },
        {
          heading:'Do I need to pay tax on my winnings?',
          content:'As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.',
        },
        {
          heading:'Can I play free games online?',
          content:'As already mentioned above, the casino list you can see on this page is already localized for your country, based on the IP address from which you are accessing our website. If you want to view online casinos that accept players from another country, you can use the "For Players from" filter to select the desired country.',
        },
      ],
    }
  ]

  btnNext = [
    '1','2','3','4','5','...','124'
  ]
  // apiRanks = [
  //   {
  //     top: "#1",
  //     colorNav:"#161735",
  //     infoTop: "- dunder CASINO",
  //     infoTopMobi:"- Dunder australia online casino",
  //     imgNav:"./assets/img/image 2.png",
  //     colorBorderPresent: "#E8317E",
  //     textPresent:"121% up to $500 and 200 extra spins",
  //   },
  //   {
  //     top: "#2",
  //     colorNav:"#147B44",
  //     infoTop: "- dunder CASINO",
  //     infoTopMobi:"- Dunder australia online casino",
  //     imgNav:"./assets/img/image 2.1.jpg",
  //     colorBorderPresent: "#F6BF31",
  //     textPresent:"121% up to $500 and 200 extra spins",
  //   },
  //   {
  //     top: "#3",
  //     colorNav:"#AE0001",
  //     infoTop: "- dunder CASINO",
  //     infoTopMobi:"- Dunder australia online casino",
  //     imgNav:"./assets/img/image 2.2.png",
  //     colorBorderPresent: "#F6BF31",
  //     textPresent:"121% up to $500 and 200 extra spins",
  //   },
  //   {
  //     top: "#4",
  //     colorNav:"#2A385B",
  //     infoTop: "- dunder CASINO",
  //     infoTopMobi:"- Dunder australia online casino",
  //     imgNav:"./assets/img/image 2.3.png",
  //     colorBorderPresent: "#F6BF31",
  //     textPresent:"121% up to $500 and 200 extra spins, On Game Reel and other games",
  //   },

  // ]


  constructor(private renderer: Renderer2, private elementRef: ElementRef,private sharedService: SharedServiceService) {}
// handle show more ranking-----------
  // showAll = false;


// handle activeBtn
  activeBtn = 0;
  clickNext(index:number){
    this.activeBtn = index
  }


// handle toggle content blogs
ngAfterViewInit() {
  this.getApi().subscribe(res => {


  })


  const blogs = this.elementRef.nativeElement.querySelectorAll('.blog__content')
  const iconUps = this.elementRef.nativeElement.querySelectorAll('.up__content--blog')
  const iconDowns = this.elementRef.nativeElement.querySelectorAll('.down__content--blog')

  iconUps.forEach((iconUp: HTMLElement, index: number) => {
    const blog = blogs[index];
    const iconDown = iconDowns[index]
    iconUp.addEventListener('click', () =>{
      blog.style.display = 'none';
      iconDown.style.display = 'block';
      iconUp.style.display = 'none';
    });
  });

  iconDowns.forEach((iconDown: HTMLElement, index: number) => {
    const blog = blogs[index];
    const iconUp = iconUps[index];
    iconDown.addEventListener('click', () => {
      blog.style.display = 'block';
      iconUp.style.display = 'block';
      iconDown.style.display = 'none';
    });
  });
}

// handle activeMenu
  clickEven: boolean[] = []
  activeMenu = 0;
  onClickMenu(index: number) {
    this.activeMenu = index;
    // this.clickEven[index] = !this.clickEven[index];
  }

// handle toggle item FAQ
  isFaq: boolean[] = [true ];
  onFaqClick(index: number) {
    this.isFaq[index] = !this.isFaq[index];
  }

  //handle showmore 18


}
