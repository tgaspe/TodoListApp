<template>
    <div class="comic-book pa-6">
      <h2 class="text-center text-h4 font-weight-light">Comic Book</h2>
      <div class="pa-2">
        <p class="text-h6 font-weight-light">Date: {{ comic.day }}/{{ comic.month }}/{{ comic.year }}</p>
        <p class="text-h6 font-weight-light">Number: {{ comic.num }}</p>
        <p class="text-h6 font-weight-light">Title: {{ comic.safe_title }}</p>
        <p class="text-h6 font-weight-light">Image: <a v-bind:url="comic.img">{{ comic.img }}</a></p>
        <img class="pa-4 center" v-bind:src="comic.img" alt="alternatetext">
      </div>
      <v-card-actions class="justify-center">
        <v-btn v-on:click="previousChapter" class="ma-3">
          <v-icon>mdi-arrow-left</v-icon>
          prev
        </v-btn>
        <v-btn v-on:click="nextChapter" class="ma-3">
          next
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>

      <!-- Uncomment Here -->
      <!-- <div>
        <h2>test axios</h2>
        <p>user id: {{ todo.userId }}</p>
        <p>todo id: {{ todo.id }}</p>
        <p>title:  {{ todo.title }}</p>
        <p>completed: {{ todo.completed }}</p>
      </div> -->
    </div>
</template>
  
<script>
import axios from "axios";

  
  
export default {
  name: "ComicPage",
  components: {

  },
  data () {
    return {
      chapter: 100,
      comic: {
        "month": "5", 
        "num": 100, 
        "link": "", 
        "year": "2006", 
        "news": "", 
        "safe_title": "Family Circus", 
        "transcript": "[[Picture shows a pathway winding through trees to a sink inside a house, out to some swings and back to ths sink, out to a ball and back to the sink...]]\nCaption: Jeffy's ongoing struggle with obsessive-compulsive disorder\n{{alt text: This was my friend David's idea}}", 
        "alt": "This was my friend David's idea", 
        "img": "https://imgs.xkcd.com/comics/family_circus.jpg", 
        "title": "Family Circus", 
        "day": "10"},
      comic_list: {
        94: {"month": "4", "num": 94, "link": "", "year": "2006", "news": "", "safe_title": "Profile Creation Flowchart", "transcript": "Creating an AIM Profile:\n[[A flowchart is shown.]]\nHave Friends? -> No -> Link to your LiveJournal\nHave Friends? -> Yes, and want to alienate everyone else -> INSIDE JOKES!\nHave Friends? -> Yes -> Have Boyfriend \n Girlfriend? -> No -> Angsty about it? -> Yes -> Link to your LiveJournal\nAngsty about it? -> No -> Yes you are -> Angsty about it?\nHave Boyfriend \n Girlfriend? -> Yes -> A profile tribute is the greatest possible expression of love.\n{{title text: This one goes out to xxCrazyPixie1987xx}}", "alt": "This one goes out to xxCrazyPixie1987xx", "img": "https://imgs.xkcd.com/comics/profile_flowchart.jpg", "title": "Profile Creation Flowchart", "day": "26"},
        95: {"month": "4", "num": 95, "link": "", "year": "2006", "news": "", "safe_title": "The Sierpinski Penis Game", "transcript": "[[The Sierpinski Penis Game]]\n[[A large triangle is shown, with many smaller trianges inside]]\n[[Words are in the triangles]]\nSierpinski game: PENIS! Haha, penis.", "alt": "Inappropriate places for the Penis Game include baby showers and terrorist attacks", "img": "https://imgs.xkcd.com/comics/the_sierpinski_penis_game.jpg", "title": "The Sierpinski Penis Game", "day": "28"},
        96: {"month": "5", "num": 96, "link": "", "year": "2006", "news": "", "safe_title": "Mail", "transcript": "[[A person is talking to someone over the phone.]]\nPhone: Do you think I could mail a running chainsaw to someone?\nPerson: I doubt it.\nPhone: What about a baby's first word?\nPerson: Look, your obsession with sending strange things through the mail is getting out of hand.\nPhone: Can you mail a blank stare?\nPhone: A dizzying height?\nPhone: Pi?\nPerson: . . .\nPhone: Well, did you at least get that package of time I sent you?\nPerson: I . . . you . . . no, I didn't.\nPhone: Well, there was a lot of it, so it will probably take a while.\n{{alt: I'm on the USPS No Fly List.}}", "alt": "I'm on the USPS No Fly List", "img": "https://imgs.xkcd.com/comics/mail.png", "title": "Mail", "day": "1"},
        97: {"month": "5", "num": 97, "link": "", "year": "2006", "news": "", "safe_title": "A Simple Plan", "transcript": "[[Man standing in front of stool with radio on it]]\n<<music>>You don't know what it's like to be me!\nAt first, I loved A Simple Plan. Then I realized, with creeping horror, that they were serious.\n{{alt-text: This is true.  The Lyrics are ridiculous.}}", "alt": "This is true.  The lyrics are ridiculous.", "img": "https://imgs.xkcd.com/comics/a_simple_plan.jpg", "title": "A Simple Plan", "day": "3"},
        98: {"month": "5", "num": 98, "link": "", "year": "2006", "news": "", "safe_title": "Fall Apart", "transcript": "[[Various people struggle as the comic disintegrates. Toward the top, people are standing calmly, some holding hands. As the parts of the comic break apart, people try to reach for each other, hold parts together, or curl up into a ball. By the bottom, a person is falling, surrounded by pieces of the comic]]\n{{title text:#pugglewumper Tashari got me some ink pens!  I've been experimenting with them.}}", "alt": "#pugglewumper Tashari got me some ink pens!  I've been experimenting with them.", "img": "https://imgs.xkcd.com/comics/fall_apart.jpg", "title": "Fall Apart", "day": "5"},
        99: {"month": "5", "num": 99, "link": "", "year": "2006", "news": "", "safe_title": "Binary Heart", "transcript": "[[All the numbers are black except for a heart-shaped red section in the middle.]]\n011010010110110001101\n111011101100110010101\n111001010011110111010\n101101001011011000100\n111101110110011001010\n111100101101111011101\n010110100101101100011\n011110111011001100101\n011110010100111101110\n101011010010110110001\n001111011101100110010\n101111001010011110111\n010101101001011011000\n101010110100101101100\n010011110111011001100\n101011110010110111101\n110101011010010110110\n001001111011101100110\n010101111001010011110\n111010101101001011011\n000100111101110110011\n{{alt: i love you}}", "alt": "i love you", "img": "https://imgs.xkcd.com/comics/binary_heart.jpg", "title": "Binary Heart", "day": "8"},
        100: {"month": "5", "num": 100, "link": "", "year": "2006", "news": "", "safe_title": "Family Circus", "transcript": "[[Picture shows a pathway winding through trees to a sink inside a house, out to some swings and back to ths sink, out to a ball and back to the sink...]]\nCaption: Jeffy's ongoing struggle with obsessive-compulsive disorder\n{{alt text: This was my friend David's idea}}", "alt": "This was my friend David's idea", "img": "https://imgs.xkcd.com/comics/family_circus.jpg", "title": "Family Circus", "day": "10"},
        101: {"month": "5", "num": 101, "link": "", "year": "2006", "news": "", "safe_title": "Laser Scope", "transcript": "[[ Box with a mailing label on one side, and in the front: ]]\nMiss your loved ones?\n[[ Picture of a missile launcher ]]\nYou don't have to.\nRJX-21 Laser Scope\n{{Alt text: I wish I'd missed you then so I wouldn't be missing you now.}}", "alt": "I wish I'd missed you then so I wouldn't be missing you now", "img": "https://imgs.xkcd.com/comics/laser_scope.jpg", "title": "Laser Scope", "day": "12"},
        102: {"month": "5", "num": 102, "link": "", "year": "2006", "news": "", "safe_title": "Back to the Future", "transcript": "{{Title: Back to the Future}}\n[[A man and a woman are standing, talking to one another]]\nMan: This weekend, my professor friend built a time machine out of a DeLorean and I went back in time! I helped make sure my parents got together and helped my dad to be less of a loser.\nWoman: Wow! Do you still have the time machine?\nMan: Nah. But I did what I really needed to do.\nWoman: Uh huh.\n[[Neither says anything]]\nWoman: Okay, you remember that my father was in the WTC North Tower, right? \nMan: Yeah...why?\nWoman: I...nothing.\n{{alt text: He's kind of an asshole, when you think about it.}}", "alt": "He's kind of an asshole, when you think about it", "img": "https://imgs.xkcd.com/comics/back_to_the_future.jpg", "title": "Back to the Future", "day": "15"},
        103: {"month": "5", "num": 103, "link": "", "year": "2006", "news": "", "safe_title": "Moral Relativity", "transcript": "[[A graph, rationalization as a function of speed, increasing exponentially with an asymptote at c]]\nRelated to moral relativism, it states that ethics become subjective only when you approach the speed of light.  That is, it's okay to be self-serving, steal, and murder as long as you're going really, really fast.\n(Note:  This is why rap sounds better on the highway at 90 mph)\n{{It's science!}}", "alt": "It's science!", "img": "https://imgs.xkcd.com/comics/moral_relativity.jpg", "title": "Moral Relativity", "day": "17"},
        104: {"month": "5", "num": 104, "link": "", "year": "2006", "news": "", "safe_title": "Find You", "transcript": "[[The panel is black with rough-edged white passages running down through it. A stick figure is holding onto a rope, dangling down one of these passages. White text is in the black sections.]]\nYou were afraid that you would disappear, that you would be lost and forgotten.\nI held you tight against the dark and said that I would always come for you.\nThen one day it happened. You were torn from my arms and vanished from this world.\nMaybe you don't remember my promise. But I meant every word.\nI hope you're not afraid, wherever you are.\nYou don't need to be.\nI'm not.\nI will find you.\n{{title-text: I'm like the Terminator, except with love!}}", "alt": "I'm like the Terminator, except with love!", "img": "https://imgs.xkcd.com/comics/find_you.jpg", "title": "Find You", "day": "19"},
        105: {"month": "5", "num": 105, "link": "", "year": "2006", "news": "", "safe_title": "Parallel Universe", "transcript": "[[Two people are standing next to a large pentagram with candles at the points. A figure is hovering above it in a wave of energy.]]\nPerson 1: Sweet. I summoned myself from a parallel universe.\nPerson 2: You know, he could vanish at any moment.\nPerson 2: You should take this chance to make out with yourself.\nPerson 2: . . . you know, _I_ could vanish at any moment.\n{{alt: It's possible. Better to be on the safe side.}}", "alt": "It's possible.  Better to be on the safe side.", "img": "https://imgs.xkcd.com/comics/parallel_universe.jpg", "title": "Parallel Universe", "day": "22"},
        106: {"month": "5", "num": 106, "link": "", "year": "2006", "news": "", "safe_title": "Wright Brothers", "transcript": "[[A man and a woman are talking to each other]]\nMan: I've heard that when the Wright brothers argued, they periodically switched sides in the debate to try to encourage a more balanced conclusion.\nMan: We should try that in our relationship!\nWoman: It's a neat idea, but I think treating personal issues like a debate will only engender hostility and hurt feelings.\nMan: No, I think it would help, by forcing us to consider the other person's point of view.\nWoman: Hmm, maybe you're right.\nMan: Am not.  It's a bad idea.\n{{alt: I'm not sure if this is actually true}}", "alt": "I'm not sure if this is actually true", "img": "https://imgs.xkcd.com/comics/wright_brothers.png", "title": "Wright Brothers", "day": "24"},
        107: {"month": "5", "num": 107, "link": "", "year": "2006", "news": "", "safe_title": "Snakes on a Plane! 2", "transcript": "[[A sky full of jumbo jets is shown in movie poster format.]]\nTop of the poster: From the creators of last summer's hit thriller Snakes On a Plane comes:\nSuperimposed on the sky and planes:  Snakes...  on EVERY Plane!\nBottom of the poster: Much worse than last time.\n{{Mouseover text:  James suggested this, and I'd have to agree.  It'd be much worse.}}", "alt": "James suggested this, and I have to agree.  It'd be much worse.", "img": "https://imgs.xkcd.com/comics/snakes_on_a_plane_2.jpg", "title": "Snakes on a Plane! 2", "day": "26"},
      }
      // -- Uncomment here --
      //todo: {},
    }
  },
  methods: {
    nextChapter () {
      console.log("next clicked");
      this.chapter ++;
      
      let url = "https://xkcd.com/" + this.chapter + "/info.0.json";
      axios.get(url)
        .then(res => this.comic = res.data)
        .catch(err => console.log(err));
    
      console.log("communication with server is not working");
      //Quick fix
      this.comic = this.comic_list[this.chapter];
      
    },
    previousChapter () {
      console.log("previous clicked");
      this.chapter --;
      
      let url = "https://xkcd.com/" + this.chapter + "/info.0.json";
      axios.get(url)
        .then(res => this.comic = res.data)
        .catch(err => console.log(err));
    
      console.log("communication with server is not working");
      //Quick fix
      this.comic = this.comic_list[this.chapter];
      
    }
  },
  created () {
    axios.get("https://xkcd.com/614/info.0.json")
      .then(res => this.comic = res.data)
      .catch(err => console.log(err));
    console.log("Axios is working. Problem lies on the server. Server needs to add my app domain to the Access-Control-Allow-Origin header. You can check it out by uncommenting axios test code on file ComicBook.vue.");

    // Uncomment bellow to test Axios
    // axios.get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then(res => this.todo = res.data)
    //   .catch(err => console.log(err));
  },    
}
 
</script>

<style>
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>