# Anki Extension 🩺

For all Anki enthusiasts out there, or any normal people, I bring you another portal to the Anki Realm!
This is an Anki Extension (as the name suggests) to use on Chrome for making Cards/Notes while browsing the web.


## Getting Started

Using this Application is quite simple. 
1. ❗❗❗MAKE SURE YOU HAVE THE [PREREQUISITES](prerequisites)❗❗❗
2. Install the extension (you're in the right place) 😁

<br>

### Prerequisites

Requirements to use this extension correctly include 
- Having Anki on your PC. [Download Here](https://apps.ankiweb.net/)
- Logged in on Anki 🥸
- Having the Foosoft AnkiConnect Add-on [Link Here](https://ankiweb.net/shared/info/2055492159)
    - Many don't have this extension yet, so here's a quick review of it:
      1. Open Anki (duh) 😏
      2. Click on "Tools" (top left)
      3. On the drop-down, click "Add-ons"
      4. On the new window that popped open, click "Get Add-ons..." (top right)👀
      5. On the new window that popped open, enter the code "2055492159"
      6. Press "OK", restart Anki (close it out and open it again), and it should be set up! 😎
    - For more information about the Anki Connect API and Add-on, head over [here to Foosoft's Website (the developer)](https://foosoft.net/projects/anki-connect/)
  
<br>
  

### Installing

To install, clone this repository.
For my non-computer people, this is for you:
- Click the button that says "Code" (it's green, top right-ish)
- On the drop-down, click "Download Zip"
- Move it to wherever you want to, then unzipp it 🤐

<br>

Now that you have it cloned, we need to add it to Chrome's extension panel. This requires Chrome to be in developer mode (since it's not on the Chrome Web Store 🥲...yet).
- Open Chrome, Click the 3 Vertical Dots (top right), Click Extensions, then "Manage Extensions"
- At the top right, toggle developer mode       
We can now get the extension pulled up on Chrome
- Click "Load Unpacked" (top left)
- On the File Explorer Window that popped up, navigate to the location where you kept the unzipped folder and select that folder
- Optionally, you can pin the extension for ez access.

<br>

## Sample tests

To test this application, press the extension button. A menu should appear that looks similar to the one below.
![Test Image a](https://github.com/user-attachments/assets/7b94f068-d125-4406-86ed-6c78432e0787)   
If Anki is not open, and/or the add-on (stated in the [prerequisites](prerequisites)) is not installed, then an error will be thrown.

![Test Image c](https://github.com/user-attachments/assets/ce3f68e6-a784-4e9c-bad0-67947a32d717)
![Test Image d](https://github.com/user-attachments/assets/e59ca12b-d796-445f-aa76-26a62e92bbab)

Once Anki is open (and the add-on is installed), then toggle the extension.   
If no error is thrown, you can start writing Cards. Might I suggest you pick a deck first before writing cards, otherwise an error will be thrown.
  
![Test Image f](https://github.com/user-attachments/assets/2f24545e-3ebb-4614-9127-6be42f182cc7)    

After writing and submitting your card, double-check (for this test run) your deck. Open Anki to the deck you wrote to and check if your card is there. 😏 (Pls tell me it worked 😉)

<br>

### Style test

This extension uses a content editable div for the input...which isn't safe all the time (in your case, since this is a personal extension, there shouldn't be harm unless you try hacking yourself🤔❓)   
This was chosen, however, for the specific reason that you can insert images! So feel free to drag and drop as needed.


## Deployment

This is most definitely not the final version, so there will be updates. I, as a novice programmer, have no idea how to send updates, so check back here now and then to see if there are updates.      
Future plans include UI fixes, such as fixing the deck menu, cleaning up the content-editable div problem, and other minor fixes.    
Major future plans include utilizing AI to both create cards for decks (using particular trained models based on the subject) as well as scrapping FREE websites that contain Anki decks (free because I don't want to get sued 😬).     
This will be more applicable as it will contain used decks that have been tried and tested. 

<br>
 
## Built With

  - [Open Source Licences]([https://creativecommons.org/](https://opensource.org/license/mit)) - Used to choose
    the license
  - VS Code - as my code editor
  - [Foosoft's AnkiConnect API](https://foosoft.net/projects/anki-connect/) - this is the backbone of all the
    user account interaction


## Contributing

I don't have any contributing markdown files. If you want to add to this project, feel free to make a pull request. If you want to merge,    
I'll review your changes and happily add to the extension! 😊 (I might need a little time, but I'll get it done ✅)


## Versioning

- Current Version: 1.0.0
Version List (Major.Minor.Patch)
- 11/30/24 - 1.0.0


We use [Semantic Versioning](http://semver.org/) for versioning.   
For the versions available (for the template), see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)
  - [Andrew Kalathra](https://github.com/Andrew-Ka) - That's me 😎
  - [Foosoft](https://foosoft.net/projects/anki-connect/) - AnkiConnect API



## License

This project is licensed under the [MIT](LICENSE)
License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

  - Hat tip to Foosoft (once again ⭐)
  - Thanks to Gemini 🤖 for helping me debug 🪰
  - Inspiration drawn for Anki themselves as well as Google's Side Panel 👾
  - For all the medical students out there (including you Sis 😉)
