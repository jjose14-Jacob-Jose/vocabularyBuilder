<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
    <title>Vocabulary Builder Web App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/vocabularyAppWebScripts.js"></script>
    <script src="https://www.google.com/recaptcha/api.js?render=6LekFAwpAAAAALCkFj2KbJ64l2d2Uth42ti3weOq"></script>
    <link rel="stylesheet" type="text/css" href="css/vocabularyAppWebStyle.css"/>
    <?php include 'vocabularyAppWebConstants.php' ?>

</head>
    <body>
        <div id="divFloating">
            <div class="divHeading">
                <a href="index.php"><h1>Vocabulary Builder</h1></a>
                <a onclick="scrollToMiddle('divConfigurationSection')"><h4>Configuration</h4></a>
                <a onclick="scrollToMiddle('divHelp')"><h4>Help</h4></a>
                <a onclick="scrollToMiddle('divHotkeys')"><h4>Hotkeys</h4></a>
                <a onclick="scrollToMiddle('divDisclaimer')"><h4>Disclaimer</h4></a>
                <a onclick="scrollToMiddle('divAbout')"><h4>About</h4></a>
           </div>
            <!-- USER INPUT AREA START -->
            <hr>
            <div id="userInput" tabIndex="1">
                <label> Meaning : </label>
                <input type="text" id="<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER); ?>" autofocus
                       placeHolder="<?php echo(MSG_PLACEHOLDER_WORD_WITH_ENTER); ?>" class="txtUserInput"
                       onKeyUp=displayLettersMagnified("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER); ?>")
                       onclick=clearTextBoxContents("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER); ?>")>
                <label> All : </label>
                <input type="text" id="<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER); ?>"
                       placeHolder="<?php echo(MSG_PLACEHOLDER_WORD_WITH_ENTER); ?>" class="txtUserInput"
                       onKeyUp=displayLettersMagnified("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER); ?>")
                       onclick=clearTextBoxContents("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER); ?>")>

                <label> Meaning (without Enter): </label>
                <input type="text" id="<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER); ?>"
                       onKeyUp="searchOnlyWordColumnWithoutEnter()" placeHolder="<?php echo(MSG_PLACEHOLDER_WORD_WITHOUT_ENTER); ?>"
                       class="txtUserInput"
                       onKeyUp=displayLettersMagnified("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER); ?>")
                       onclick=clearTextBoxContents("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER); ?>")>

                <label> All (without Enter): </label>
                <input type="text" id="<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER); ?>"
                       onKeyUp="searchAllColumnsWithoutEnter()" placeHolder="<?php echo(MSG_PLACEHOLDER_WORD_WITHOUT_ENTER); ?>"
                       class="txtUserInput"
                       onKeyUp=displayLettersMagnified("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER); ?>")
                       onclick=clearTextBoxContents("<?php echo(TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER); ?>")>


                <label class="numberOfWords"></label>
            </div>
        </div>
        <!-- USER INPUT AREA END -->
        <hr>
        <!-- SEARCH RESULTS AREA START -->
        <!-- AREA TO DISPLAY INPUT BY USER IN BIGGER FONT START -->
        <div class="lettersTypedByUserMagnified" id="lettersTypedByUserMagnified" ></div>
        <!-- AREA TO DISPLAY INPUT BY USER IN BIGGER FONT END -->
        <div id="divWordsFromDB" tabIndex="3">
            <table id="tableWordsFromDB">
                <thead id="theadTableWordsFromDB" class="theadTableWordsFromDB">
                <th id="Word">Word</th>
                <th id="Meaning">Meaning</th>
                <th id="Definition">Definition</th>
                <th id="Additional_Info">Additional Information</th>
                <th id="Date">Date</th>
                </thead>
                <tbody id="tbodyTableWordsFromDB" class="tbodyTableWordsFromDB" tabIndex="2">
                </tbody>
            </table>
        </div>
        <img id="imgWaitScreen" src="images/loading-gif-1.gif" alt="Please wait" height="50%"/>

        <!-- SEARCH RESULTS AREA END -->
        <!-- AREA TO DISPLAY BIGGER FONT DISPLAY SETUP START -->
        <hr>
        <div class="divMenu">
            <div class="divConfigurationSection" id="divConfigurationSection" tabIndex="3">
                <h3> Configuration </h3>
                <ol>
                    <li>
                        <label for="cbsearchExternalSourcesIfNotFoundInYourOwnDB">
                            <input type="checkbox" id="cbsearchExternalSourcesIfNotFoundInYourOwnDB"/>
                            Check if you want to search results of words ONLY if they are not found in your own list.
                        </label>
                    </li>

                    <li>
                        <label for="cbsearchSelectAllExternalSearchOptions">
                            <input type="checkbox" id="cbsearchSelectAllExternalSearchOptions"/
                            onClick="selectAllExternalSearchOptions()">
                            Check if you select all the external search options.
                        </label>
                    </li>

                    <li>
                        <label for="cbMagnifyLetters">
                            <input type="checkbox" id="cbMagnifyLetters" onclick="clearMagnifiedWords()" tabIndex="5"/>
                            Check if you want to magnify the words while you type.
                        </label>
                    </li>

                    <li>
                        <label for="cbSelectTextboxOnFocus">
                            <input type="checkbox" id="cbSelectTextboxOnFocus"/>
                            Check if you want to select the contents of a text box on focus.
                        </label>
                    </li>

                    <li>
                        <label for="cbFocusBackToVocabularyAppWebAfterExternalSearch">
                            <input type="checkbox" id="cbFocusBackToVocabularyAppWebAfterExternalSearch"/>
                            Check if you come back automatically to the Vocabulary App Web after searching external sources.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchMerriamWebsterDictionary">
                            <input type="checkbox" id="cbsearchMerriamWebsterDictionary"/>
                            Check if you want to display the results on Merriam Webster Dictionary on a new tab.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchMerriamWebsterThesaurus">
                            <input type="checkbox" id="cbsearchMerriamWebsterThesaurus"/>
                            Check if you want to display the results on Merriam Webster Thesaurus on a new tab.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchOlamDictionary">
                            <input type="checkbox" id="cbsearchOlamDictionary"/>
                            Check if you want to display the results on Olam (English to Malayalam) Dictionary on a new tab.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchGoogle">
                            <input type="checkbox" id="cbsearchGoogle"/>
                            Check if you want to display the results on Google Search on a new tab.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchMerriamWebsterDictionaryForEtymologySection">
                            <input type="checkbox" id="cbsearchMerriamWebsterDictionaryForEtymologySection"/>
                            Check if you want to display the results on Merriam Webster Dictionary on 1 more tab for search the
                            Etymology Section.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchGoogleImages">
                            <input type="checkbox" id="cbsearchGoogleImages"/>
                            Check if you want to display the results on Google Images on a new tab.
                        </label>
                    </li>
                    <li>
                        <label for="cbsearchYouTube">
                            <input type="checkbox" id="cbsearchYouTube"/>
                            Check if you want to display the results on YouTube on a new tab.
                        </label>
                    </li>
                </ol>
            </div>
            <!-- AREA TO DISPLAY BIGGER FONT DISPLAY SETUP END -->
            <!-- 	DISCLAIMER INFORMATION START -->
            <div id="divHelp">
                <ul style="list-style-type:disc;">
                    <h3>Help</h3>
                    <li>Enter word or characters in the 1st and 2nd TextBoxes and press 'Enter' key to search and display the
                        words.
                    </li>
                    <li>Enter word or characters in the 3rd and 4th TextBoxes to search and display the words while you type.</li>
                    <li>Simply press 'Enter' on 1st and 2nd TextBoxes WITHOUT any content to list all words.</li>
                    <li>Delete ALL contents from 3rd and 4th TextBoxes to list all words.</li>
                </ul>
                <ul style="list-style-type:disc;">
                    <div id="divHotkeys">
                    <h3>Hotkeys</h3>
                        <li>Toggle a checkbox of index "#" by pressing the corresponding "#" key.</li>
                        <li>Configuration Item #10 can be toggled by pressing "1".</li>
                        <li>Press "~" to go to the Configuration Section.</li>
                        <li>Press "-" on NumPad to focus on the 'Search-all-fields Textbox Field'.</li>
                        <li>Press "+" on NumPad to focus on the 'Search-only-meaning Textbox Field'.</li>
                        <li>Press "*" on NumPad to focus on the 'Search-all-fields without enter Textbox Field'.</li>
                        <li>Press "/" on NumPad to focus on the 'Search-only-meaning without enter Textbox Field'.</li>
                        <li>Press "Esc" twice within 2 seconds to close additional tabs.</li>
                    </div>
                </ul>
            </div>

            <div id="divDisclaimer">
                <ul style="list-style-type:disc;">
                    <h3>Disclaimer</h3>
                    <p>This software includes vocabulary definitions sourced from external providers for prototyping and educational purposes. These definitions belong to their respective owners. We acknowledge and sincerely credit:</p>
                    <ul>
                        <li>Merriam-Webster: <a href="https://www.merriam-webster.com/">https://www.merriam-webster.com/</a></li>
                        <li>Olam: <a href="https://olam.in">https://olam.in/</a></li>
                        <li>Google: <a href="https://www.google.com/">https://www.google.com/</a></li>
                    </ul>
                    <p>This usage is not intended for commercial purposes but aims to facilitate learning and understanding of words. We respect and appreciate the content provided by these sources.</p>

                </ul>
            </div>

            <div id="divAbout">
                <ul style="list-style-type:disc;">
                    <h3>About</h3>
                    <p>My inspiration to create this web-app was during my preparation Graduate/Master's degree.</p>
                    <li>v1</li>
                    <ul>
                        <li>Development started on 22-March-2020 IST.</li>
                        <li>Development completed on at 23:23 on 29-March-2020 IST.</li>
                    </ul>
                    <li>v2</li>
                    <ul>
                        <li>Redesign started  10:000 17-October-2023 PT</li>
                        <li>Deployed to cloud around 12:00 of 18-October-2023 PT.</li>
                    </ul>
                </ul>
            </div>
        </div>
        <!-- 	DISCLAIMER INFORMATION END -->
    </body>
    <footer>
        &copy; 2023 <a href="https://www.jacobjose.live/">Jacob Jose</a>. All rights reserved.
    </footer>
</html>