<img src="https://github.com/RenzoSev/rpgt/assets/73757018/d9cb55c5-45da-45b5-85fc-ae16fd1169aa" height="242px" />
</br>

# How to Hack Cyber Fisk

**RENZO MENESES SEVILHA**

**Final paper submitted to Fisk Artur Alvim for achieving the Final Certification of English Course.**

**São Paulo, April, 2024**

# Disclaimer

The primary objective of this research paper is to explore the technical
aspects of Cyber Fisk and analyze potential vulnerabilities for
educational and knowledge purposes only. The intention behind this
investigation is just to give understanding and expertise in
cybersecurity and ethical hacking. Under no circumstances does this
paper promote or encourage any unauthorized access, malicious activity,
or hacking attempts on Cyber Fisk or any other platform. It is essential
to emphasize that ethical conduct, respect for privacy to legal and
ethical standards should always be followed in all online activities.

# Abstract

This present research project (TCC) investigates how to exploit
loopholes in the ranking system of the Fisk website to improve one\'s
score and achieve a first-place ranking. The motivation for this project
was to understand the inner workings of the ranking system and identify
potential areas for improvement. Additionally, the project aimed to
demonstrate the potential impact of such loopholes on the overall
fairness and accuracy of the ranking system.

The research involved a combination of theoretical analysis and
practical experimentation. The first step was to identify potential
loopholes in the ranking system by carefully examining the system\'s
rules. Once potential loopholes were identified, practical experiments
were conducted to verify their effectiveness and quantify their impact
on the ranking score.

This research project has important implications for both the Fisk
website and the broader field of online ranking systems. The findings of
this project can help the Fisk website improve the security and fairness
of its ranking system by addressing the identified loopholes.
Additionally, the project\'s findings can contribute to the development
of more robust and secure ranking systems in other online contexts.

**Keywords: Fisk website, ranking system, loopholes, gamification,
online learning, ethics, HTML, JavaScript**

# 1. Introduction

On an ordinary day, while browsing the Fisk website, the discrepancy in
the ranking scores sparked my curiosity. Exorbitant scores of some users
challenged the logic and fairness of the system. This discrepancy
prompted a deep investigation, leading to this study.

The central objective of this work is to unravel the loopholes in the
Fisk website\'s ranking system. Through a meticulous analysis of the
website\'s code structure, we aim to identify the flaws that allow
artificial manipulation of scores.

In this work, we explore the Fisk ranking system, its applications, and
the problems related to score manipulation. Through concrete examples
and illustrations, we elucidate the key concepts and relevant
terminology.

# 2. Cyber Fisk

## 2.1 What is Cyber Fisk?

First and foremost, Cyber Fisk is an educational platform provided for
Fisk. This platform offers students the opportunity to improve their
writing, listening, and speaking skills through online exercises.
Furthermore, it is not a simple educational system: it is
***gamified.***

## 2.2 Gamification

Gamification is an innovative approach to increase participation and
interaction within a non-gaming community. Through gamification,
websites can incorporate game mechanics, such as rankings, level, xp,
score, points and other metrics to improve engagement. In an educational
environment, gamification becomes particularly interesting to capture
the attention of the students, offering a new approach to teach and
learn.

In a technical/programming context, gamification introduces additional
challenges to ensure the smooth operation of the website. It is
necessary to guarantee users a great experience, free from any website
bugs or issues, **while also preventing any potential cheating.**

Every software or website has vulnerabilities; it is almost impossible
to eliminate all possibilities of attack. The complexity of an
application usually increases the chances of being hacked. The situation
is no different for gamification. Integrating an entire RPG game
environment into your website opens vulnerabilities for hackers to
exploit your site.

With that, the central question comes: can Cyber Fisk be hacked? This
Final Paper aims to provide a definitive answer, and the spoiler is:
***yes, we can!***

With this final paper, I will demonstrate how I achieved the top
position on the CyberFisk Rank with a score of ***15,063,206.***

![image27](https://github.com/RenzoSev/rpgt/assets/73757018/64554791-b63f-4f41-a779-c18fd764b217)

## 2.3 Discover Cyber Fisk

Gamification is an innovative approach to increase participation and
interaction within a non-gaming community. Through gamification,
websites can incorporate game mechanics, such as rankings, level, xp,
score, points and other metrics to improve engagement. In an educational
environment, gamification becomes particularly interesting to capture
the attention of the students, offering a new approach to teach and
learn.

## 2.4 Challenge

**Challenge is where we can practice our reading skills: verbs,
structure, parts of speech, phrasal verbs, etc.** The Challenge is
separated by lessons, which focuses on a specific topic based on the
current book.

As mentioned before, CyberFisk includes gamification, including in the
Challenge. The Challenge has levels of difficulty for each lesson. Upon
completion of each lesson, you will receive a score, calculated based on
your \"lesson data realization.\" **The time you spent finishing the
lesson, the difficulty, and correct/incorrect answers contribute to your
score.** This score is then added to your current total score, which can
be viewed on the Fisk Ranking. You can see your \"global\" position and
other specific positions, such as local positions.

**The main idea in the Challenge Chapter is to determine if we are
capable of exploiting this score calculator to generate more points for
each lesson.** However, before doing so, we need to understand exactly
how it works behind the code.

# 3 Website Structure

CyberFisk is a website. A website is a web application that, nowadays,
is composed of a front engine (also known as frontend or client) and a
back engine (also known as backend or server).

In simpler terms, the frontend is the visual part of a website where we
design elements like colors, effects, buttons, etc. Through the
frontend, the website displays necessary data in a user-friendly way.
It\'s crucial to note that the frontend code is entirely in the browser.
When we access a website, our browser downloads the entire code from the
server source and presents the required data for us. As we\'ll explore
later, we can analyze and search code using available and official
browser tools. Therefore, it\'s important to avoid exposing sensitive
data in the frontend to prevent potential exploits or attacks.

On the other hand, the backend is where operational data is processed.
Through the backend, we can store data in a database, create security
processes, automations, jobs, etc. Essentially, it's basically everything which we can't see on the website. We usually
handle sensitive data and improve our general security through the
backend.

![image23](https://github.com/RenzoSev/rpgt/assets/73757018/7aa067a1-e17e-4fbb-a96a-4ef0d524f824)

For now, we are going to explore the frontend. To achieve it, we can
analyze the frontend structure using browser developer tools. In other
words, we'll debug the site through the browser. However, before
inspecting the frontend, we need to understand the pillars of the
frontend.

## 3.1 HTML (HyperText Markup Language)

Most webpage content, **like text, paragraphs, and buttons,** is
structured with HTML. HTML defines the structure and content of a
webpage, making it the foundation for building websites. All of these
elements, including inputs for email and password, are HTML elements.

HTML uses tags, written within angle brackets (\< and \>), to define and
organize different parts of a webpage. For example, the \<p\> tag
defines a paragraph, while the \<h1\> tag defines a heading. These tags
are paired with a closing tag (\</p\> or \</h1\>) that indicates the end
of the element.

This button:

![image19](https://github.com/RenzoSev/rpgt/assets/73757018/9004bf30-8483-483e-af5e-632f4001ec19)

Is a direct result of this HTML code ***(without the style and
functionalities)***:

![image10](https://github.com/RenzoSev/rpgt/assets/73757018/3dc5d38c-2853-43b6-b7d4-69e765c0b33c)

Besides the elements, we can add **logic** to HTML. One of the many
possible ways, which is the one we will go further for now, is the
script tag. **Inside the script, we can create JavaScript code.** We
won't go further on JavaScript for now, but JavaScript is a programming
language. **The most important programming language for web development
and one of the most used programming languages.** Most of the
interactions and technologies of a site come from JavaScript
implementation.

Now, we will really debug CyberFisk. As mentioned before, we'll start
with the Challenge.

# 4. **Debugging Cyber Fisk**

To open the developer tools, press **Ctrl + Shift + C** on your
keyboard. **(Note: This shortcut works specifically in Google Chrome.
Other browsers may have different shortcuts.).** This window should
open:

![image2](https://github.com/RenzoSev/rpgt/assets/73757018/4da2ce4a-aa0c-48d2-9cc8-206a7e7eb32c)

As we can see, there are many elements nested within each other. This is
the typical structure of a real website\'s HTML code.

Taking the image below as an example, it shows the HTML code for the
\"Play\" button of each
session.

![image12](https://github.com/RenzoSev/rpgt/assets/73757018/78710981-4fac-416b-bfd6-e8c0602acf08)

**Let\'s break this element down:**

-   **class:** This attribute specifies the style name of the button. As
    you can see, the \"Play\" button has its own unique style. We will
    not forward into styles at this point, but it is important to note
    that styles are defined within each class name, using properties
    like **fonts, colors, height, weight, etc.**

-   **id:** This attribute acts as a unique identifier for the element,
    allowing us to easily interact with and locate it within the code.

-   **onclick:** This attribute defines an event that will occur when
    the user clicks on the button. This event typically triggers a
    JavaScript function. This is how interactivity is achieved on
    websites. In this specific onclick event, we can observe a function
    named \"vaiPraOCara.\" It is likely that clicking on this element
    will redirect the user to another page or something else.

However, our objective here is to achieve the top rank (position #1) on
the CyberFisk Ranking. To accomplish this, we need to comprehend the
website\'s interactive elements and manipulate them. Our current focus
is to understand the code or logic behind the score calculation to
determine how the final result is obtained and, subsequently, manipulate
it. Now, let\'s get to enter a challenge session.

# 5. Challenging the JavaScript

Opening the Chrome Developer Tools and checking the **"Sources"** tab,
we will find the same as the image below. The **"Sources"** tab groups
all the hosts where we are downloading something to be done at the
current page which we are looking at, like extensions, pages, addons,
etc. For now, we just want to check the host
**"cyber.fisk.com.br:175"**.\

![image28](https://github.com/RenzoSev/rpgt/assets/73757018/a3610111-12a9-4ab6-bdc1-71d72bd8481e)

By examining the host, we can find folders and files. These contain the
page\'s source code, which includes all the instructions needed to
properly display the content. As mentioned earlier, your browser stores
all the necessary data to render the website correctly. ***Anyone*** can
view the source code to understand how the page functions behind the
scenes. Let\'s check a JavaScript file (.js), inside the Challenge
folder, which seems to be what we want to aim for now.

Inside the \"Challenge\" folder, we\'ll find a JavaScript file named
\"functionMontanha.js\" (marked by the red rectangle). Clicking on it
will open the code in a pane on the right (pink rectangle). This is
JavaScript code, and as you\'ve observed, it\'s a very descriptive code
and well-commented. Clear comments are a very good practice when
developing, as they help developers understand the code\'s purpose.
While there can be some debate about using excessive comments, comments
are generally helpful throughout the code for better readability. In
this case, I think there are more comments than necessary, but the name
given to variables, functions, etc is really good.

![image6](https://github.com/RenzoSev/rpgt/assets/73757018/71a71328-1687-4e71-bef6-cbe6a0de39c7)

Here\'s the challenge: **While very descriptive and readable code is
essential during development, when the code is published and accessible
on the internet (production), we typically want to make it less
readable.** This is done to mitigate cyber risks. For example, in a
scenario like Cyber Fisk, which is gamified, an attacker could
potentially exploit the code if they understood exactly how it
functioned.

In this kind of scenario, we usually ***"uglify"*** the production code.
One of the many ways to do that is minifying and compressing the code.
So, getting the code into the pink rectangle at the image below and
minifying and compressing it, we get the following result.

```js
function chamaConf(){}var _1234=1,_5678=!0,_9012=0,_3456=["Iniciar","Play","Comenzar"],_7890=["Continuar","Continue","Continuar"];function _1357(){}function _2468(){"S"===_9318("veioJogo")&&(_9318("veioJogo","N"),localStorage.setItem(localStorage.getItem("cyberfisk_aluno_id")+"fisk_chaFechou","S"),_9319("pegaDadosChaNovo","&id="+_9318("cyberfisk_aluno_id")+"&livro="+_9318("cyberfisk_livroSel"),function(){_9318("cha_atual",resposta[0]);_9318("cyberfisk_livroSel");_4567(),_8901()},"../"))}
```

The code above has the same result as the previously shown code, but it
is considerably difficult to understand the exposed code. See, it is not
impossible to understand. We have programming techniques to understand
the entire functionality of a code in its raw state. This method is
generally called ***Reverse Engineering***, but we won't go further on
it. However, uglifying the code already makes the steps of a possible
exposed vulnerability quite difficult. **The more readable, the easier
it is for us humans to understand what the code does. The more familiar
we are with a code, the easier it becomes to find the possible
bottlenecks.**

We just saw how we can analyze the code that is being executed in real
time in our browser, as soon as we access a website. We also saw where
we can find the code that executes more complex functions on the page,
which are usually the JavaScript files/scripts.

Now, it is time to analyze the website, understanding where we could
possibly find a vulnerability that would allow us to score while playing
the game.

**To do this, a great first step would be to actually play the game.**
**By playing, we can visualize the code that is executed in real time to
satisfy the functionalities of a \"gamified\" website.** In other words,
we can see exactly how the code records a correct or wrong answer, or
even the final score of a round.

## 6. Analyzing the runtime code

Upon starting the game, doing the same process to debug the JavaScript
code present in the Challenge, we found a file called
functionChallenge.js.

When opening this file, we found a lot of relevant information to
understand how the code really works. Let\'s start by trying to do some
basic interaction.

![image7](https://github.com/RenzoSev/rpgt/assets/73757018/e3902df2-f8f8-47c5-af84-64b77669cedd)

I will not go into too much technical detail about the code itself, but
check the codes declared as **\"var\" + a specific name**.

Variables store values in the system, in memory. These values are used
at various times and are the basis of any programming language.

![image9](https://github.com/RenzoSev/rpgt/assets/73757018/5047493c-132e-49c6-b440-9c76cbc131a8)

This variable, for example, indicates that a value is being stored
something about time. In the Challenge, we have a set time to choose an
answer. **Will we be able to change the maximum time to choose an answer
by changing the value of this "Tempo" variable?** Let\'s find out.

In the \"console\" tab, present in the Chrome debugger, we will type
Tempo = 9999999. In this code, **we are basically just saying that that
time variable will receive the timed \"9999999\" seconds.**

![image4](https://github.com/RenzoSev/rpgt/assets/73757018/ee42cea6-eaf6-4931-bb37-6a27f52a7f7d)

Now, checking the game again, this is the result. Seems that we were
able to change the time to choose an answer for each question. Let's see
if we can do the same with the final score.

![image24](https://github.com/RenzoSev/rpgt/assets/73757018/5e6d7a64-d6ed-45fe-ab5f-fb15e6b334df)

One of the variables we saw earlier was named **\"varPontos\"**.
Apparently, this variable handles the points. Let\'s try changing its
value and see how the game reacts. Let\'s set it to 1000 initially.\

![image5](https://github.com/RenzoSev/rpgt/assets/73757018/7754fe88-9b57-4507-bf35-84faac26e2bc)

Getting an answer right changes the value to 1010. Apparently, this
**"varPontos"** variable is really related to the points scored. Let\'s
finish the challenge by guessing all the next options, since the actual
number of hits and misses makes no difference to the manipulation of the
final score.

![image11](https://github.com/RenzoSev/rpgt/assets/73757018/3f473543-3691-4282-9a1e-67dd81964960)

Apparently, changing the variable was not enough. Probably, in this
case, the final calculation of the points is a bit more complex. Let\'s
analyze.\

![image3](https://github.com/RenzoSev/rpgt/assets/73757018/b7384174-3f03-472d-b3fc-e32d3a31612f)

Upon observing exactly where the variable **\"varPontos\"** is used in
the code, we notice that it is within a function called
**\"ValidaResposta\"**.\
![image30](https://github.com/RenzoSev/rpgt/assets/73757018/7ff7074e-c6d2-4e21-a649-7b123028b633)

Going down a bit further in the code, in the section where the variable
**\"varPontos\"** is being used, we find a piece of code that refers to
the \"end\". Probably, this \"end\", from the variable **\"varFim\"**,
is related to the end of the game. **The end of the game is usually
where the points are calculated and submitted.** It is possible that our
score is calculated in this part of the code.**\

![image33](https://github.com/RenzoSev/rpgt/assets/73757018/ac6a7831-a0d8-4926-ae18-d09dc741a624)

It is even possible to find the text that is generated on our screen
when we finish a game. That text shows some information about
experience, level, etc. In this case, it shows exactly what it does to
calculate the student points. In this case, the variables
**\"valPontos\"** and **\"valBonus\"**.\

![image14](https://github.com/RenzoSev/rpgt/assets/73757018/df2c4ae1-7b28-408a-9f76-90872f1c95f4)


To avoid confusion, it is worth noting that the **\"valPontos\"** we are
seeing now is not the same "**varPontos"** we saw initially. The names
can be confusing, but they are different variables declared in different
scopes of the code, so they have no direct relationship.

For this part, we will need to change the variable **\"valPontos\"**
within the function **\"ValidaResposta\"**. To accomplish this, we will
need to change the whole function. To be more specific, we will
***\"redeclare\"*** the function *(basically create it again)* with the
variable **\"valPontos\"** modified with the value we want. The function
is a bit long, so I will only leave the part of the code that we are
changing.\
\
Looking at the variable **\"valPontos\"**, **it is a calculation with
the points the player receives based on their level multiplied by the
number of correct answers.**

![image16](https://github.com/RenzoSev/rpgt/assets/73757018/5e19f368-c3bb-40e4-bf85-709595701bbc)

In this case, we will just change it to a fixed value. This fixed value
can be 1000. **It is worth noting that this is just a snippet of the
modified code. In this case, we are modifying the function
\"ValidaResposta\"**. Let's complete the game again and check the final
results.\

![image13](https://github.com/RenzoSev/rpgt/assets/73757018/b4a464e3-88e4-4bf3-b8ad-795f20661453)

Looking at the final result, we can see that the XP received was
successfully changed. And as initially shown in the project, this result
is computed. That is, it is actually saved and related to my score. I
actually get these points. They are not just visual data appearing on
our screen. This is precisely where the security of an application comes
in. In this case, a web application.\

![image21](https://github.com/RenzoSev/rpgt/assets/73757018/b180b62a-7f46-475e-92ee-eeb51c3fd6e9)

To some degree, we can control the security on the browser side. That
is, on the client/frontend side, which we saw earlier. But this has a
limit. **Even by obfuscating the code with methods like \"uglify\" and
\"minify\", it is still possible to debug and analyze how the code is
being executed in the browser. Google\'s code runs in real time on our
computer.\
\
**This is where the backend comes in, the code that only runs on the
server side. This part is not visible in our browser. It is code running
on a server, on a specific machine. We only make requests to this
machine. **We communicate with it to request data and information, but
we cannot see the code there.** Of course, everything is susceptible to
vulnerabilities, but sensitive data and crucial logic for our
applications MUST reside on servers. **Basically, the problem is not
being able to read and understand all of CyberFisk\'s code, but rather
the power and permission we have over that code and the data of the
entire website.** A browser should not have the power to define how many
points will be computed for a student. This is a serious security flaw.\
\
In the next chapter, we will analyze and understand how we can protect
ourselves and prepare minimally secure code for these cases. We will use
a simple text-based RPG project.\

# 7. The backend importance to prevent vulnerabilities

**Let\'s recap how information exchange occurs between the frontend and
backend, both mentioned previously.**

When we perform an action in our browser, which results in a data change
or any other crucial action, it is necessary for this action to be
mediated by our backend.

For example: When logging into an Instagram account, **it is
[NOT]{.underline} our browser that says whether the password is correct
or not.** This is the role of the Instagram server. Basically, the
server receives the login information (email and password) from the
browser and evaluates whether the information is correct. In this case,
if the email and password match.

Basically, this would be the body of information that the browser is
sending to the server. Remember: this is just a simple illustration of
the data that is sent.\

![image1](https://github.com/RenzoSev/rpgt/assets/73757018/4408b8d8-f870-44ab-a5d5-c04773dbfdf3)

Therefore, this would be what we could expect from CyberFisk to send to
their server when we complete a game. Basically, the entire information
needed for the server to validate whether it was a valid game. If it is
valid, the server would add the score made to my total score.\

![image20](https://github.com/RenzoSev/rpgt/assets/73757018/b863d0d2-7159-4874-8ed8-126c2a41963d)

**Basically, this could be a possibility for server validation. If all
conditions are valid, the server should compute the data. If not, it
should return an error for that request, explaining that it was not
identified as a valid move.**

-   Analyze the number of wrong answers;

-   Analyze the number of correct answers;

-   Calculate these values with the points per student level (the bonus
    point we saw earlier) and check if it would be possible for the
    student to achieve the number of points they achieved;

-   The time we send (timeToFinishInSeconds) could be a more complex way
    to analyze if the moves are actually being made by a human in valid
    time and not an automated request.

Perhaps the last condition, regarding time, was a bit complex. The point
is that the frontend, the website we see in the browser, **is just an
interface made to facilitate our understanding of the data that is
appearing on the screen.** The point is: ***the internet does not need
an interface or any other visual effect to work.***

This is how programmers create automation, or bots, to perform a
function on the internet. This is also the reason we see those "little
boxes" to verify if we are robots or not with some frequency.\

![image18](https://github.com/RenzoSev/rpgt/assets/73757018/3b3b218d-b286-4536-a419-a15163655ac2)

For example: there are current cases of people who make automations/bots
to buy all the tickets for a show, and then resell them for a higher
price. Or even with the launch of clothes or sneakers. Skipping the
frontend and communicating directly to the server without the browser is
a powerful tool.

**This is all because of a specific detail: the frontend only exists so
that humans can have comfort and pleasure when using the internet,
without having to see only texts and codes on the screen. Bots only need
to interact directly with the data, just like that body of information
we saw earlier.** They don\'t need to answer all the Challenge
questions. They can simply send requests saying that they answered all
the Challenge questions correctly. Therefore, measuring the time taken
and when it was done would be a possible more complex solution for these
cases, but we will not go into further detail on this.

Under the hood, without visual effects, all technology boils down to a
chain of binary sequences, for example: 000111011100001.

# 8. Protecting the website in practice

Let\'s now take a look at a very simple application focused on the issue
of protection against potential vulnerabilities in gamification cases.
We will use an application that I made for this project. In this case,
it is an application on a website, designed for mobile devices. Below is
the application\'s entry screen (or Home, as we call it).

![image34](https://github.com/RenzoSev/rpgt/assets/73757018/1c8bd0e9-cf09-42da-830c-8a2788def68b)

This is the Login Page. It is just a static page, there is no login functionality at all.

![image35](https://github.com/RenzoSev/rpgt/assets/73757018/e59a6a14-dd34-417b-823e-9ed7173e8181)

The next pages are, respectively:

1.  Choosing a monster to fight.

2.  Choosing which items will be equipped in the next battles.

3.  Choosing items to buy and equip in the next battles.

![image22](https://github.com/RenzoSev/rpgt/assets/73757018/df97b5c7-24dd-44f2-8ecb-4cb8fdc63440)

![image36](https://github.com/RenzoSev/rpgt/assets/73757018/95ac5daa-6441-421e-a0f3-1ff45b9197bd)

![image25](https://github.com/RenzoSev/rpgt/assets/73757018/9ad876a9-2f24-45ba-99fc-19c2324b5cb5)

As we can see, the game is about fighting monsters in dungeons, as you
level up and buy new items to fight stronger monsters. Each player has a
level and a certain amount of gold. With level, we can fight monsters
and buy new items. In addition, each item has a required amount of gold
to be purchased. At first, we cannot fight monsters or buy weapons with
a level higher than ours. Gold is also needed to buy weapons.

Players and monsters have an amount of health and attack. For the player
to defeat a monster, he must destroy all of the monster\'s health with
his attack, so that he ends the battle with at least 1 health. In other
words, it is not possible to defeat a monster if the player ends the
battle with 0 or less health.

With that in mind, we can think of some cases to be explored in a game
like this:

-   **Is it possible to buy an item that we can\'t afford?**

-   **Is it possible to buy an item that we don\'t have the required
    level for?**

-   **Is it possible to fight a monster that we don\'t have the required
    level for?**

-   **Is it possible to manipulate the gold we receive after fighting a
    monster?**

-   **Is it possible to manipulate the experience points we receive
    after fighting a monster?**

-   **Is it possible to manipulate the level we receive after fighting a
    monster?**

-   **Is it possible to manipulate the outcome of a match against a
    monster? In this case, winning a battle that we should have lost?**

In the following tests, we will use a level 10 player with 20 gold.To
start our tests, let\'s take a look at the item purchase tab. As you can
see, our store has two items: a sword and shield.

![image15](https://github.com/RenzoSev/rpgt/assets/73757018/85ddfe37-7161-4ab9-9d73-0c43ff5aa026)

Looking at our amount of gold and level at the top of the program, we
realized that we have the necessary amount to buy both items. Let\'s buy
them.

![image17](https://github.com/RenzoSev/rpgt/assets/73757018/c65abb74-d1c2-4c2e-8444-604c3a52688a)

Great! Checking the equipped items, we can see that we were able to
purchase both items. Would it be possible to do the same with items that
we don\'t have the gold and/or level for?

![image32](https://github.com/RenzoSev/rpgt/assets/73757018/c4a6f224-ed08-4c21-b6ad-4ff8a6854c5f)

***Purposefully, I left the possibility in this application for the user
to start a purchase with products that should not be available for those
who do not have enough gold and/or level. In real scenarios and with
good practices, there should be a visual impediment at the interface
level that prevents the user from buying the items. Just like the
solutions we usually see in games or something like that: a visual
response that illustrates that the item is \"blocked\" from being
purchased.***

In any case, let\'s simulate a purchase with the items diamond sword and
diamond sword. Both items require level 50 and 50 gold, each. Therefore,
we should not be able to buy them.

![image8](https://github.com/RenzoSev/rpgt/assets/73757018/25ac340a-014a-4874-81d3-d150056631b7)

Apparently, we received a **400 error** indicating that the purchase
could not be completed. I will not go into details about the \"Status
Codes\" that we can receive between requests, but 400 indicates that an
action was denied. In this case, the action of buying a new item. With
this, we can understand that the server did not allow the purchase to be
made. In fact, there seems to be no visible exploits on the browser
side. Let\'s then analyze the request level between browser and server.

Looking at the server request below, you can see that we only send two
pieces of data: player name and item name. **We do not send gold,
experience, anything. Basically, it is the server\'s responsibility to
collect the player\'s data and analyze whether the purchase can be made.
*Again, it is not the browser\'s job.*** Therefore, we only leave the
browser's responsibility, which has a totally open code to be read and
interpreted by anyone, to send the name of who is buying and what is
being bought.

![image29](https://github.com/RenzoSev/rpgt/assets/73757018/68976c28-d33e-4dfa-9dd1-f4532a1b2226)

Therefore, the server only sends us the error, indicating exactly what
caused the error. As we can see below, the server returns an error,
indicating that the player does not have enough level and gold to make
the purchase. If only one of the two conditions were missing, the server
would only return one of the messages.

![image26](https://github.com/RenzoSev/rpgt/assets/73757018/3b272bdf-c505-4ef5-b159-83b904fe7ba8)

***It is worth noting that, in a more robust application, we would also
have a user authentication method. Of course, it is not enough for me to
say that I am Renzo. I need to prove to the system that I am Renzo.
However, authentication would be the subject of another presentation. We
are only focusing on the body of the request. More detailed information
will not be included here.***

***In addition, when receiving a request on the browser side, we should
have a visual response indicating that the purchase of the item could
not be made for X and Y reasons. As this is just a test application, I
did not replicate all the visual responses that would be interesting to
have. This could be addressed in another project about the user
experience throughout a gamified application. We created a front with
some \"loopholes\" to show what the user could try to do.***

With just a simple change in the structure of our application, we can
ensure that our server will not be vulnerable to simple request
failures. Fighting monsters, equipping items, buying items, selling
items, etc. All of these actions can be summarized by sending WHO is
doing the action and WHAT they are changing in the action. This should
be the only function of the user, of the user request.

# 9. Conclusion

This research project has successfully explored the vulnerabilities
within the ranking system of the Fisk website, Cyber Fisk. By analyzing
the website\'s structure and code, we were able to identify and exploit
loopholes that allowed for the manipulation of scores. This demonstrates
the potential risks associated with gamification and the importance of
robust security measures on both the client-side and server-side of web
applications.

The findings of this project can serve as a valuable lesson for
developers and educators alike. Developers must be mindful of potential
vulnerabilities when implementing gamified elements and prioritize
strong backend validation to ensure data integrity. Educators can
leverage this research to understand the potential consequences of score
manipulation in online learning environments.

In conclusion, this project has highlighted the importance of
cybersecurity awareness in today\'s digital world. By understanding the
methods and motivations behind hacking attempts, we can work towards
creating a more secure and reliable online experience for everyone.

# 10. References

> **Jaye. 2022. "Frontend vs backend vs full stack: Which to learn?",
> https://scrimba.com/articles/frontend-backend-or-fullstack/**
>
> **Symeonidis, E., et al. (2023, June 21). Most used programming
> languages among developers worldwide as of 2023. Retrieved from**
> [**[https://www.statista.com/statistics/869092/worldwide-software-developer-survey-languages-used/]{.underline}**](https://www.statista.com/statistics/869092/worldwide-software-developer-survey-languages-used/)
>
> **Amazon Web Services (AWS) (n.d.). What's the difference between
> frontend and backend in application development? Retrieved from**
> [**[https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/]{.underline}**](https://aws.amazon.com/compare/the-difference-between-frontend-and-backend/)
>
> **RadiumHacker (2020, February 10). Server-side vs. client-side
> vulnerabilities. Medium. Retrieved from**
> [**[https://radiumhacker.medium.com/server-side-vs-client-side-vulnerabilities-16ff5743b35b]{.underline}**](https://radiumhacker.medium.com/server-side-vs-client-side-vulnerabilities-16ff5743b35b)
>
> **Google (n.d.). Browser tools. Retrieved from**
> [**[https://www.google.com/chrome/browser-tools/]{.underline}**](https://www.google.com/chrome/browser-tools/)
>
> **Mozilla. HTTP response status. Retrieved from
> [[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status]{.underline}](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**
>
> **Renzo Sevilha. RPGT, app made for the Fisk final paper. Retrieved
> from
> [[https://github.com/RenzoSev/rpgt]{.underline}](https://github.com/RenzoSev/rpgt)**
