// ===== Bible Verses Data by Book =====
const bibleVersesByBook = {
    genesis: {
        beginner: [
            { id: 1, reference: "Genesis 1:1", verse: "In the beginning God created the heavens and the earth." },
            { id: 2, reference: "Genesis 1:27", verse: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
            { id: 3, reference: "Genesis 2:24", verse: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh." },
            { id: 4, reference: "Genesis 12:2", verse: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing." },
            { id: 5, reference: "Genesis 15:6", verse: "Abram believed the Lord, and he credited it to him as righteousness." },
            { id: 6, reference: "Genesis 22:14", verse: "So Abraham called that place The Lord Will Provide." },
            { id: 7, reference: "Genesis 28:15", verse: "I am with you and will watch over you wherever you go." },
            { id: 8, reference: "Genesis 31:49", verse: "May the Lord keep watch between you and me when we are away from each other." },
            { id: 9, reference: "Genesis 50:20", verse: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives." },
            { id: 10, reference: "Genesis 9:13", verse: "I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth." }
        ],
        intermediate: [
            { id: 1, reference: "Genesis 1:1", verse: "In the beginning God created the heavens and the earth.", context: "The opening verse of the Bible, establishing God as Creator" },
            { id: 2, reference: "Genesis 1:27", verse: "So God created mankind in his own image, in the image of God he created them; male and female he created them.", context: "God's creation of humanity in His image" },
            { id: 3, reference: "Genesis 2:24", verse: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh.", context: "The institution of marriage in Eden" },
            { id: 4, reference: "Genesis 3:15", verse: "And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.", context: "The first prophecy of Christ's victory over Satan" },
            { id: 5, reference: "Genesis 12:2-3", verse: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.", context: "God's covenant promise to Abraham" },
            { id: 6, reference: "Genesis 15:6", verse: "Abram believed the Lord, and he credited it to him as righteousness.", context: "Faith credited as righteousness - foundational to salvation doctrine" },
            { id: 7, reference: "Genesis 22:8", verse: "Abraham answered, 'God himself will provide the lamb for the burnt offering, my son.'", context: "Abraham's faith when asked to sacrifice Isaac" },
            { id: 8, reference: "Genesis 28:15", verse: "I am with you and will watch over you wherever you go, and I will bring you back to this land.", context: "God's promise to Jacob at Bethel" },
            { id: 9, reference: "Genesis 50:20", verse: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.", context: "Joseph's declaration of God's sovereignty to his brothers" },
            { id: 10, reference: "Genesis 18:14", verse: "Is anything too hard for the Lord?", context: "God's response when Sarah laughed about having a child" }
        ],
        hard: [
            { id: 1, reference: "Genesis 1:1", verse: "In the beginning God created the heavens and the earth.", hint: "Complete: 'In the beginning...'" },
            { id: 2, reference: "Genesis 1:27", verse: "So God created mankind in his own image, in the image of God he created them; male and female he created them.", hint: "How did God create mankind?" },
            { id: 3, reference: "Genesis 2:24", verse: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh.", hint: "About marriage: 'That is why a man...'" },
            { id: 4, reference: "Genesis 3:15", verse: "And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.", hint: "The first prophecy about Christ" },
            { id: 5, reference: "Genesis 12:2", verse: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.", hint: "God's promise to Abraham" },
            { id: 6, reference: "Genesis 15:6", verse: "Abram believed the Lord, and he credited it to him as righteousness.", hint: "Complete: 'Abram believed...'" },
            { id: 7, reference: "Genesis 22:14", verse: "So Abraham called that place The Lord Will Provide.", hint: "What Abraham named the place" },
            { id: 8, reference: "Genesis 28:15", verse: "I am with you and will watch over you wherever you go.", hint: "God's promise: 'I am with you...'" },
            { id: 9, reference: "Genesis 50:20", verse: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.", hint: "Joseph to his brothers" },
            { id: 10, reference: "Genesis 18:14", verse: "Is anything too hard for the Lord?", hint: "A question about God's power" }
        ]
    },
    psalms: {
        beginner: [
            { id: 1, reference: "Psalm 23:1", verse: "The Lord is my shepherd; I shall not want." },
            { id: 2, reference: "Psalm 46:1", verse: "God is our refuge and strength, an ever-present help in trouble." },
            { id: 3, reference: "Psalm 119:105", verse: "Your word is a lamp for my feet, a light on my path." },
            { id: 4, reference: "Psalm 118:24", verse: "This is the day the Lord has made; let us rejoice and be glad in it." },
            { id: 5, reference: "Psalm 27:1", verse: "The Lord is my light and my salvation—whom shall I fear?" },
            { id: 6, reference: "Psalm 37:4", verse: "Take delight in the Lord, and he will give you the desires of your heart." },
            { id: 7, reference: "Psalm 139:14", verse: "I praise you because I am fearfully and wonderfully made." },
            { id: 8, reference: "Psalm 34:8", verse: "Taste and see that the Lord is good; blessed is the one who takes refuge in him." },
            { id: 9, reference: "Psalm 100:5", verse: "For the Lord is good and his love endures forever; his faithfulness continues through all generations." },
            { id: 10, reference: "Psalm 56:3", verse: "When I am afraid, I put my trust in you." }
        ],
        intermediate: [
            { id: 1, reference: "Psalm 23:1-3", verse: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.", context: "David's beloved shepherd psalm of trust" },
            { id: 2, reference: "Psalm 46:1-2", verse: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way.", context: "A psalm of confidence during upheaval" },
            { id: 3, reference: "Psalm 119:105", verse: "Your word is a lamp for my feet, a light on my path.", context: "The longest psalm, celebrating God's Word" },
            { id: 4, reference: "Psalm 51:10", verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", context: "David's prayer of repentance after his sin with Bathsheba" },
            { id: 5, reference: "Psalm 27:1", verse: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?", context: "A psalm of fearless faith" },
            { id: 6, reference: "Psalm 139:13-14", verse: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.", context: "God's intimate knowledge and creation of each person" },
            { id: 7, reference: "Psalm 91:1-2", verse: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'", context: "A psalm of divine protection" },
            { id: 8, reference: "Psalm 34:8", verse: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", context: "Written when David pretended insanity before Abimelech" },
            { id: 9, reference: "Psalm 103:12", verse: "As far as the east is from the west, so far has he removed our transgressions from us.", context: "David praising God's forgiveness and compassion" },
            { id: 10, reference: "Psalm 42:1", verse: "As the deer pants for streams of water, so my soul pants for you, my God.", context: "A psalm of spiritual longing" }
        ],
        hard: [
            { id: 1, reference: "Psalm 23:1", verse: "The Lord is my shepherd; I shall not want.", hint: "Complete: 'The Lord is my...'" },
            { id: 2, reference: "Psalm 46:1", verse: "God is our refuge and strength, an ever-present help in trouble.", hint: "What is God to us?" },
            { id: 3, reference: "Psalm 119:105", verse: "Your word is a lamp for my feet, a light on my path.", hint: "What is God's word to us?" },
            { id: 4, reference: "Psalm 51:10", verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", hint: "David's prayer: 'Create in me...'" },
            { id: 5, reference: "Psalm 27:1", verse: "The Lord is my light and my salvation—whom shall I fear?", hint: "The Lord is my light and..." },
            { id: 6, reference: "Psalm 139:14", verse: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.", hint: "How are we made?" },
            { id: 7, reference: "Psalm 34:8", verse: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", hint: "Complete: 'Taste and see...'" },
            { id: 8, reference: "Psalm 103:12", verse: "As far as the east is from the west, so far has he removed our transgressions from us.", hint: "How far has God removed our sins?" },
            { id: 9, reference: "Psalm 37:4", verse: "Take delight in the Lord, and he will give you the desires of your heart.", hint: "What should we delight in?" },
            { id: 10, reference: "Psalm 56:3", verse: "When I am afraid, I put my trust in you.", hint: "When afraid, what do we do?" }
        ]
    },
    proverbs: {
        beginner: [
            { id: 1, reference: "Proverbs 3:5", verse: "Trust in the Lord with all your heart and lean not on your own understanding." },
            { id: 2, reference: "Proverbs 3:6", verse: "In all your ways submit to him, and he will make your paths straight." },
            { id: 3, reference: "Proverbs 22:6", verse: "Start children off on the way they should go, and even when they are old they will not turn from it." },
            { id: 4, reference: "Proverbs 18:10", verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe." },
            { id: 5, reference: "Proverbs 16:3", verse: "Commit to the Lord whatever you do, and he will establish your plans." },
            { id: 6, reference: "Proverbs 27:17", verse: "As iron sharpens iron, so one person sharpens another." },
            { id: 7, reference: "Proverbs 4:23", verse: "Above all else, guard your heart, for everything you do flows from it." },
            { id: 8, reference: "Proverbs 1:7", verse: "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction." },
            { id: 9, reference: "Proverbs 15:1", verse: "A gentle answer turns away wrath, but a harsh word stirs up anger." },
            { id: 10, reference: "Proverbs 31:30", verse: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised." }
        ],
        intermediate: [
            { id: 1, reference: "Proverbs 3:5-6", verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", context: "Solomon's wisdom on trusting God completely" },
            { id: 2, reference: "Proverbs 22:6", verse: "Start children off on the way they should go, and even when they are old they will not turn from it.", context: "Wisdom on raising children in faith" },
            { id: 3, reference: "Proverbs 18:10", verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", context: "God's name as protection" },
            { id: 4, reference: "Proverbs 27:17", verse: "As iron sharpens iron, so one person sharpens another.", context: "The value of godly friendship" },
            { id: 5, reference: "Proverbs 4:23", verse: "Above all else, guard your heart, for everything you do flows from it.", context: "Solomon's advice on protecting your heart" },
            { id: 6, reference: "Proverbs 1:7", verse: "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.", context: "The foundation of all wisdom" },
            { id: 7, reference: "Proverbs 16:9", verse: "In their hearts humans plan their course, but the Lord establishes their steps.", context: "God's sovereignty over human plans" },
            { id: 8, reference: "Proverbs 11:25", verse: "A generous person will prosper; whoever refreshes others will be refreshed.", context: "The blessing of generosity" },
            { id: 9, reference: "Proverbs 15:1", verse: "A gentle answer turns away wrath, but a harsh word stirs up anger.", context: "Wisdom on controlling speech" },
            { id: 10, reference: "Proverbs 31:30", verse: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.", context: "The conclusion of the Proverbs 31 woman passage" }
        ],
        hard: [
            { id: 1, reference: "Proverbs 3:5", verse: "Trust in the Lord with all your heart and lean not on your own understanding.", hint: "Complete: 'Trust in the Lord...'" },
            { id: 2, reference: "Proverbs 3:6", verse: "In all your ways submit to him, and he will make your paths straight.", hint: "What will God do to your paths?" },
            { id: 3, reference: "Proverbs 22:6", verse: "Start children off on the way they should go, and even when they are old they will not turn from it.", hint: "About training children" },
            { id: 4, reference: "Proverbs 18:10", verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", hint: "What is the Lord's name like?" },
            { id: 5, reference: "Proverbs 27:17", verse: "As iron sharpens iron, so one person sharpens another.", hint: "Complete the comparison: 'As iron...'" },
            { id: 6, reference: "Proverbs 4:23", verse: "Above all else, guard your heart, for everything you do flows from it.", hint: "What should we guard above all?" },
            { id: 7, reference: "Proverbs 1:7", verse: "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.", hint: "What is the beginning of knowledge?" },
            { id: 8, reference: "Proverbs 16:3", verse: "Commit to the Lord whatever you do, and he will establish your plans.", hint: "Complete: 'Commit to the Lord...'" },
            { id: 9, reference: "Proverbs 15:1", verse: "A gentle answer turns away wrath, but a harsh word stirs up anger.", hint: "What does a gentle answer do?" },
            { id: 10, reference: "Proverbs 31:30", verse: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.", hint: "What kind of woman is praised?" }
        ]
    },
    isaiah: {
        beginner: [
            { id: 1, reference: "Isaiah 40:31", verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles." },
            { id: 2, reference: "Isaiah 41:10", verse: "So do not fear, for I am with you; do not be dismayed, for I am your God." },
            { id: 3, reference: "Isaiah 53:5", verse: "But he was pierced for our transgressions, he was crushed for our iniquities." },
            { id: 4, reference: "Isaiah 9:6", verse: "For to us a child is born, to us a son is given, and the government will be on his shoulders." },
            { id: 5, reference: "Isaiah 26:3", verse: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
            { id: 6, reference: "Isaiah 43:2", verse: "When you pass through the waters, I will be with you." },
            { id: 7, reference: "Isaiah 55:8", verse: "For my thoughts are not your thoughts, neither are your ways my ways." },
            { id: 8, reference: "Isaiah 12:2", verse: "Surely God is my salvation; I will trust and not be afraid." },
            { id: 9, reference: "Isaiah 58:11", verse: "The Lord will guide you always." },
            { id: 10, reference: "Isaiah 43:19", verse: "See, I am doing a new thing! Now it springs up; do you not perceive it?" }
        ],
        intermediate: [
            { id: 1, reference: "Isaiah 40:31", verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", context: "Promise of renewed strength after the 'Comfort my people' passage" },
            { id: 2, reference: "Isaiah 41:10", verse: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", context: "God's reassurance to Israel in exile" },
            { id: 3, reference: "Isaiah 53:5", verse: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", context: "The suffering servant prophecy about Christ" },
            { id: 4, reference: "Isaiah 9:6", verse: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.", context: "Messianic prophecy of Christ's birth" },
            { id: 5, reference: "Isaiah 26:3", verse: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", context: "From a song of praise for God's salvation" },
            { id: 6, reference: "Isaiah 43:2", verse: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.", context: "God's promise of presence during trials" },
            { id: 7, reference: "Isaiah 55:8-9", verse: "For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. As the heavens are higher than the earth, so are my ways higher than your ways.", context: "God's transcendent wisdom and plans" },
            { id: 8, reference: "Isaiah 40:8", verse: "The grass withers and the flowers fall, but the word of our God endures forever.", context: "The eternal nature of God's Word" },
            { id: 9, reference: "Isaiah 53:6", verse: "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.", context: "Our sin and Christ's atonement" },
            { id: 10, reference: "Isaiah 43:19", verse: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.", context: "God's promise of new beginnings" }
        ],
        hard: [
            { id: 1, reference: "Isaiah 40:31", verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", hint: "Those who hope in the Lord will..." },
            { id: 2, reference: "Isaiah 41:10", verse: "So do not fear, for I am with you; do not be dismayed, for I am your God.", hint: "God says: 'Do not fear...'" },
            { id: 3, reference: "Isaiah 53:5", verse: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.", hint: "He was pierced for..." },
            { id: 4, reference: "Isaiah 9:6", verse: "For to us a child is born, to us a son is given, and the government will be on his shoulders.", hint: "About the Messiah's birth" },
            { id: 5, reference: "Isaiah 26:3", verse: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", hint: "Who is kept in perfect peace?" },
            { id: 6, reference: "Isaiah 43:2", verse: "When you pass through the waters, I will be with you.", hint: "God's presence in trials" },
            { id: 7, reference: "Isaiah 55:8", verse: "For my thoughts are not your thoughts, neither are your ways my ways.", hint: "God's thoughts vs. ours" },
            { id: 8, reference: "Isaiah 40:8", verse: "The grass withers and the flowers fall, but the word of our God endures forever.", hint: "What endures forever?" },
            { id: 9, reference: "Isaiah 53:6", verse: "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.", hint: "Like sheep, we have..." },
            { id: 10, reference: "Isaiah 43:19", verse: "See, I am doing a new thing! Now it springs up; do you not perceive it?", hint: "God says: 'I am doing...'" }
        ]
    },
    matthew: {
        beginner: [
            { id: 1, reference: "Matthew 28:19", verse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
            { id: 2, reference: "Matthew 6:33", verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well." },
            { id: 3, reference: "Matthew 11:28", verse: "Come to me, all you who are weary and burdened, and I will give you rest." },
            { id: 4, reference: "Matthew 5:16", verse: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." },
            { id: 5, reference: "Matthew 7:7", verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you." },
            { id: 6, reference: "Matthew 22:37", verse: "Love the Lord your God with all your heart and with all your soul and with all your mind." },
            { id: 7, reference: "Matthew 28:20", verse: "And surely I am with you always, to the very end of the age." },
            { id: 8, reference: "Matthew 5:44", verse: "But I tell you, love your enemies and pray for those who persecute you." },
            { id: 9, reference: "Matthew 6:21", verse: "For where your treasure is, there your heart will be also." },
            { id: 10, reference: "Matthew 18:20", verse: "For where two or three gather in my name, there am I with them." }
        ],
        intermediate: [
            { id: 1, reference: "Matthew 28:19-20", verse: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.", context: "The Great Commission - Jesus's final command" },
            { id: 2, reference: "Matthew 6:33", verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", context: "From the Sermon on the Mount on priorities" },
            { id: 3, reference: "Matthew 11:28-29", verse: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart.", context: "Jesus's invitation to find rest in Him" },
            { id: 4, reference: "Matthew 5:16", verse: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.", context: "Part of Jesus's teaching on being salt and light" },
            { id: 5, reference: "Matthew 7:7-8", verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives.", context: "Jesus teaching on persistent prayer" },
            { id: 6, reference: "Matthew 22:37-39", verse: "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself.", context: "Jesus summarizing the Law" },
            { id: 7, reference: "Matthew 5:43-44", verse: "You have heard that it was said, 'Love your neighbor and hate your enemy.' But I tell you, love your enemies and pray for those who persecute you.", context: "Jesus raising the standard of love" },
            { id: 8, reference: "Matthew 16:24", verse: "Then Jesus said to his disciples, 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.'", context: "The cost of discipleship" },
            { id: 9, reference: "Matthew 6:21", verse: "For where your treasure is, there your heart will be also.", context: "Teaching on treasures in heaven" },
            { id: 10, reference: "Matthew 18:20", verse: "For where two or three gather in my name, there am I with them.", context: "Jesus's presence in gathered believers" }
        ],
        hard: [
            { id: 1, reference: "Matthew 28:19", verse: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.", hint: "The Great Commission begins with..." },
            { id: 2, reference: "Matthew 6:33", verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.", hint: "What should we seek first?" },
            { id: 3, reference: "Matthew 11:28", verse: "Come to me, all you who are weary and burdened, and I will give you rest.", hint: "Jesus says: 'Come to me...'" },
            { id: 4, reference: "Matthew 5:16", verse: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.", hint: "What should we let shine?" },
            { id: 5, reference: "Matthew 7:7", verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", hint: "Ask, seek, and..." },
            { id: 6, reference: "Matthew 22:37", verse: "Love the Lord your God with all your heart and with all your soul and with all your mind.", hint: "The greatest commandment" },
            { id: 7, reference: "Matthew 28:20", verse: "And surely I am with you always, to the very end of the age.", hint: "Jesus's promise: 'I am with you...'" },
            { id: 8, reference: "Matthew 5:44", verse: "But I tell you, love your enemies and pray for those who persecute you.", hint: "How to treat enemies" },
            { id: 9, reference: "Matthew 6:21", verse: "For where your treasure is, there your heart will be also.", hint: "Where is your heart?" },
            { id: 10, reference: "Matthew 18:20", verse: "For where two or three gather in my name, there am I with them.", hint: "Where two or three gather..." }
        ]
    },
    john: {
        beginner: [
            { id: 1, reference: "John 3:16", verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
            { id: 2, reference: "John 14:6", verse: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'" },
            { id: 3, reference: "John 1:1", verse: "In the beginning was the Word, and the Word was with God, and the Word was God." },
            { id: 4, reference: "John 8:32", verse: "Then you will know the truth, and the truth will set you free." },
            { id: 5, reference: "John 10:10", verse: "I have come that they may have life, and have it to the full." },
            { id: 6, reference: "John 11:25", verse: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'" },
            { id: 7, reference: "John 13:34", verse: "A new command I give you: Love one another. As I have loved you, so you must love one another." },
            { id: 8, reference: "John 15:5", verse: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit." },
            { id: 9, reference: "John 16:33", verse: "In this world you will have trouble. But take heart! I have overcome the world." },
            { id: 10, reference: "John 1:12", verse: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God." }
        ],
        intermediate: [
            { id: 1, reference: "John 3:16-17", verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.", context: "Jesus speaking to Nicodemus about salvation" },
            { id: 2, reference: "John 14:6", verse: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", context: "Jesus comforting His disciples before His death" },
            { id: 3, reference: "John 1:1", verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", context: "The prologue establishing Christ's divinity" },
            { id: 4, reference: "John 8:32", verse: "Then you will know the truth, and the truth will set you free.", context: "Jesus speaking to believers about freedom" },
            { id: 5, reference: "John 10:10-11", verse: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full. I am the good shepherd. The good shepherd lays down his life for the sheep.", context: "Jesus as the Good Shepherd" },
            { id: 6, reference: "John 11:25-26", verse: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.'", context: "Jesus speaking to Martha before raising Lazarus" },
            { id: 7, reference: "John 13:34-35", verse: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.", context: "Jesus at the Last Supper" },
            { id: 8, reference: "John 15:5", verse: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.", context: "Jesus teaching on abiding in Him" },
            { id: 9, reference: "John 16:33", verse: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", context: "Jesus preparing disciples for tribulation" },
            { id: 10, reference: "John 1:12", verse: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.", context: "The gift of becoming God's children" }
        ],
        hard: [
            { id: 1, reference: "John 3:16", verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", hint: "For God so loved..." },
            { id: 2, reference: "John 14:6", verse: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'", hint: "I am the way..." },
            { id: 3, reference: "John 1:1", verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", hint: "In the beginning was..." },
            { id: 4, reference: "John 8:32", verse: "Then you will know the truth, and the truth will set you free.", hint: "The truth will set you..." },
            { id: 5, reference: "John 10:10", verse: "I have come that they may have life, and have it to the full.", hint: "Why did Jesus come?" },
            { id: 6, reference: "John 11:25", verse: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'", hint: "I am the resurrection..." },
            { id: 7, reference: "John 13:34", verse: "A new command I give you: Love one another. As I have loved you, so you must love one another.", hint: "The new commandment" },
            { id: 8, reference: "John 15:5", verse: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.", hint: "I am the vine..." },
            { id: 9, reference: "John 16:33", verse: "In this world you will have trouble. But take heart! I have overcome the world.", hint: "Take heart! I have..." },
            { id: 10, reference: "John 1:12", verse: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.", hint: "Those who receive Him become..." }
        ]
    },
    romans: {
        beginner: [
            { id: 1, reference: "Romans 8:28", verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
            { id: 2, reference: "Romans 12:2", verse: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
            { id: 3, reference: "Romans 5:8", verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
            { id: 4, reference: "Romans 3:23", verse: "For all have sinned and fall short of the glory of God." },
            { id: 5, reference: "Romans 6:23", verse: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." },
            { id: 6, reference: "Romans 10:9", verse: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." },
            { id: 7, reference: "Romans 8:1", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
            { id: 8, reference: "Romans 8:38-39", verse: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers... will be able to separate us from the love of God." },
            { id: 9, reference: "Romans 12:12", verse: "Be joyful in hope, patient in affliction, faithful in prayer." },
            { id: 10, reference: "Romans 15:13", verse: "May the God of hope fill you with all joy and peace as you trust in him." }
        ],
        intermediate: [
            { id: 1, reference: "Romans 8:28", verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", context: "Assurance of God's sovereign plan" },
            { id: 2, reference: "Romans 12:1-2", verse: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", context: "Paul's appeal for transformed living" },
            { id: 3, reference: "Romans 5:8", verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.", context: "The ultimate demonstration of God's love" },
            { id: 4, reference: "Romans 3:23-24", verse: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.", context: "Universal sin and freely offered grace" },
            { id: 5, reference: "Romans 6:23", verse: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", context: "The contrast between sin's penalty and God's gift" },
            { id: 6, reference: "Romans 10:9-10", verse: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified.", context: "How salvation is received" },
            { id: 7, reference: "Romans 8:1", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus.", context: "Freedom from condemnation in Christ" },
            { id: 8, reference: "Romans 8:38-39", verse: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", context: "The inseparable love of God" },
            { id: 9, reference: "Romans 12:12", verse: "Be joyful in hope, patient in affliction, faithful in prayer.", context: "Marks of sincere love in action" },
            { id: 10, reference: "Romans 15:13", verse: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.", context: "Paul's benediction of hope" }
        ],
        hard: [
            { id: 1, reference: "Romans 8:28", verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", hint: "We know that in all things God..." },
            { id: 2, reference: "Romans 12:2", verse: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", hint: "Do not conform but be..." },
            { id: 3, reference: "Romans 5:8", verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.", hint: "How God demonstrates love" },
            { id: 4, reference: "Romans 3:23", verse: "For all have sinned and fall short of the glory of God.", hint: "All have sinned and..." },
            { id: 5, reference: "Romans 6:23", verse: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", hint: "The wages of sin is..." },
            { id: 6, reference: "Romans 10:9", verse: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.", hint: "How to be saved" },
            { id: 7, reference: "Romans 8:1", verse: "Therefore, there is now no condemnation for those who are in Christ Jesus.", hint: "No condemnation for..." },
            { id: 8, reference: "Romans 8:38-39", verse: "For I am convinced that neither death nor life... will be able to separate us from the love of God.", hint: "What can separate us?" },
            { id: 9, reference: "Romans 12:12", verse: "Be joyful in hope, patient in affliction, faithful in prayer.", hint: "Be joyful in hope, patient in..." },
            { id: 10, reference: "Romans 15:13", verse: "May the God of hope fill you with all joy and peace as you trust in him.", hint: "The God of hope fills you with..." }
        ]
    },
    corinthians: {
        beginner: [
            { id: 1, reference: "1 Corinthians 13:4", verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
            { id: 2, reference: "1 Corinthians 10:13", verse: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear." },
            { id: 3, reference: "1 Corinthians 16:14", verse: "Do everything in love." },
            { id: 4, reference: "1 Corinthians 6:19", verse: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?" },
            { id: 5, reference: "1 Corinthians 15:58", verse: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you." },
            { id: 6, reference: "1 Corinthians 13:13", verse: "And now these three remain: faith, hope and love. But the greatest of these is love." },
            { id: 7, reference: "1 Corinthians 1:18", verse: "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God." },
            { id: 8, reference: "2 Corinthians 5:17", verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
            { id: 9, reference: "2 Corinthians 12:9", verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
            { id: 10, reference: "2 Corinthians 5:7", verse: "For we live by faith, not by sight." }
        ],
        intermediate: [
            { id: 1, reference: "1 Corinthians 13:4-7", verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.", context: "The Love Chapter describing true love" },
            { id: 2, reference: "1 Corinthians 10:13", verse: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.", context: "God's faithfulness in temptation" },
            { id: 3, reference: "1 Corinthians 6:19-20", verse: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.", context: "Our bodies as God's temple" },
            { id: 4, reference: "1 Corinthians 15:58", verse: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.", context: "Conclusion of the resurrection chapter" },
            { id: 5, reference: "1 Corinthians 13:13", verse: "And now these three remain: faith, hope and love. But the greatest of these is love.", context: "The supremacy of love" },
            { id: 6, reference: "1 Corinthians 1:18", verse: "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.", context: "The paradox of the cross" },
            { id: 7, reference: "2 Corinthians 5:17", verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", context: "New life in Christ" },
            { id: 8, reference: "2 Corinthians 12:9", verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.", context: "Paul's thorn and God's grace" },
            { id: 9, reference: "2 Corinthians 5:7", verse: "For we live by faith, not by sight.", context: "Walking by faith" },
            { id: 10, reference: "2 Corinthians 4:18", verse: "So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.", context: "Eternal perspective" }
        ],
        hard: [
            { id: 1, reference: "1 Corinthians 13:4", verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", hint: "Love is patient, love is..." },
            { id: 2, reference: "1 Corinthians 10:13", verse: "No temptation has overtaken you except what is common to mankind. And God is faithful.", hint: "About temptation and God's faithfulness" },
            { id: 3, reference: "1 Corinthians 16:14", verse: "Do everything in love.", hint: "A short command about love" },
            { id: 4, reference: "1 Corinthians 6:19", verse: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?", hint: "Your bodies are temples of..." },
            { id: 5, reference: "1 Corinthians 13:13", verse: "And now these three remain: faith, hope and love. But the greatest of these is love.", hint: "Three things remain..." },
            { id: 6, reference: "2 Corinthians 5:17", verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", hint: "In Christ, we are a new..." },
            { id: 7, reference: "2 Corinthians 12:9", verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'", hint: "God's grace is..." },
            { id: 8, reference: "2 Corinthians 5:7", verse: "For we live by faith, not by sight.", hint: "We live by faith, not by..." },
            { id: 9, reference: "1 Corinthians 15:58", verse: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you.", hint: "Stand firm, let nothing..." },
            { id: 10, reference: "2 Corinthians 4:18", verse: "So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.", hint: "Fix eyes on what is unseen because..." }
        ]
    },
    philippians: {
        beginner: [
            { id: 1, reference: "Philippians 4:13", verse: "I can do all things through Christ who strengthens me." },
            { id: 2, reference: "Philippians 4:6", verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
            { id: 3, reference: "Philippians 4:8", verse: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things." },
            { id: 4, reference: "Philippians 4:19", verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
            { id: 5, reference: "Philippians 1:6", verse: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus." },
            { id: 6, reference: "Philippians 2:3", verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves." },
            { id: 7, reference: "Philippians 3:14", verse: "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus." },
            { id: 8, reference: "Philippians 4:4", verse: "Rejoice in the Lord always. I will say it again: Rejoice!" },
            { id: 9, reference: "Philippians 2:14", verse: "Do everything without grumbling or arguing." },
            { id: 10, reference: "Philippians 4:7", verse: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." }
        ],
        intermediate: [
            { id: 1, reference: "Philippians 4:13", verse: "I can do all this through him who gives me strength.", context: "Paul's confidence in Christ's enabling power" },
            { id: 2, reference: "Philippians 4:6-7", verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", context: "The antidote to anxiety" },
            { id: 3, reference: "Philippians 4:8", verse: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.", context: "Guarding our thought life" },
            { id: 4, reference: "Philippians 4:19", verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", context: "God's provision for every need" },
            { id: 5, reference: "Philippians 1:6", verse: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.", context: "Assurance of God completing His work in us" },
            { id: 6, reference: "Philippians 2:3-4", verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.", context: "Christ-like humility" },
            { id: 7, reference: "Philippians 3:13-14", verse: "Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize.", context: "Pressing forward in faith" },
            { id: 8, reference: "Philippians 4:4", verse: "Rejoice in the Lord always. I will say it again: Rejoice!", context: "The call to constant joy" },
            { id: 9, reference: "Philippians 2:14-15", verse: "Do everything without grumbling or arguing, so that you may become blameless and pure, children of God without fault in a warped and crooked generation.", context: "Shining as lights" },
            { id: 10, reference: "Philippians 1:21", verse: "For to me, to live is Christ and to die is gain.", context: "Paul's life philosophy" }
        ],
        hard: [
            { id: 1, reference: "Philippians 4:13", verse: "I can do all things through Christ who strengthens me.", hint: "I can do all things through..." },
            { id: 2, reference: "Philippians 4:6", verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", hint: "Do not be anxious about..." },
            { id: 3, reference: "Philippians 4:8", verse: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.", hint: "Whatever is true, noble, right..." },
            { id: 4, reference: "Philippians 4:19", verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", hint: "God will meet all your needs..." },
            { id: 5, reference: "Philippians 1:6", verse: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.", hint: "He who began a good work..." },
            { id: 6, reference: "Philippians 2:3", verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.", hint: "Do nothing out of selfish..." },
            { id: 7, reference: "Philippians 3:14", verse: "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.", hint: "I press on toward the goal..." },
            { id: 8, reference: "Philippians 4:4", verse: "Rejoice in the Lord always. I will say it again: Rejoice!", hint: "Rejoice in the Lord..." },
            { id: 9, reference: "Philippians 4:7", verse: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", hint: "The peace of God will guard..." },
            { id: 10, reference: "Philippians 1:21", verse: "For to me, to live is Christ and to die is gain.", hint: "To live is Christ and..." }
        ]
    },
    revelation: {
        beginner: [
            { id: 1, reference: "Revelation 21:4", verse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain." },
            { id: 2, reference: "Revelation 3:20", verse: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person." },
            { id: 3, reference: "Revelation 22:13", verse: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End." },
            { id: 4, reference: "Revelation 1:8", verse: "I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty." },
            { id: 5, reference: "Revelation 21:5", verse: "He who was seated on the throne said, 'I am making everything new!'" },
            { id: 6, reference: "Revelation 22:17", verse: "The Spirit and the bride say, 'Come!' And let the one who hears say, 'Come!' Let the one who is thirsty come." },
            { id: 7, reference: "Revelation 3:11", verse: "I am coming soon. Hold on to what you have, so that no one will take your crown." },
            { id: 8, reference: "Revelation 1:17-18", verse: "Do not be afraid. I am the First and the Last. I am the Living One; I was dead, and now look, I am alive for ever and ever!" },
            { id: 9, reference: "Revelation 22:20", verse: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus." },
            { id: 10, reference: "Revelation 5:12", verse: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!" }
        ],
        intermediate: [
            { id: 1, reference: "Revelation 21:4", verse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.", context: "The promise of the new heaven and earth" },
            { id: 2, reference: "Revelation 3:20", verse: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.", context: "Christ's invitation to the church in Laodicea" },
            { id: 3, reference: "Revelation 22:13", verse: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.", context: "Christ's declaration of His eternal nature" },
            { id: 4, reference: "Revelation 1:8", verse: "I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty.", context: "God's self-revelation to John" },
            { id: 5, reference: "Revelation 21:5-6", verse: "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'", context: "God's promise of cosmic renewal" },
            { id: 6, reference: "Revelation 22:17", verse: "The Spirit and the bride say, 'Come!' And let the one who hears say, 'Come!' Let the one who is thirsty come; and let the one who wishes take the free gift of the water of life.", context: "The final invitation of Scripture" },
            { id: 7, reference: "Revelation 3:11", verse: "I am coming soon. Hold on to what you have, so that no one will take your crown.", context: "Promise to the faithful church in Philadelphia" },
            { id: 8, reference: "Revelation 1:17-18", verse: "When I saw him, I fell at his feet as though dead. Then he placed his right hand on me and said: 'Do not be afraid. I am the First and the Last. I am the Living One; I was dead, and now look, I am alive for ever and ever!'", context: "John's vision of the risen Christ" },
            { id: 9, reference: "Revelation 22:20", verse: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus.", context: "The closing prayer of the Bible" },
            { id: 10, reference: "Revelation 5:12", verse: "In a loud voice they were saying: 'Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!'", context: "Heavenly worship of Christ" }
        ],
        hard: [
            { id: 1, reference: "Revelation 21:4", verse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.", hint: "He will wipe every tear..." },
            { id: 2, reference: "Revelation 3:20", verse: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person.", hint: "I stand at the door and..." },
            { id: 3, reference: "Revelation 22:13", verse: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.", hint: "I am the Alpha and..." },
            { id: 4, reference: "Revelation 1:8", verse: "I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty.", hint: "Who is, was, and is to come" },
            { id: 5, reference: "Revelation 21:5", verse: "He who was seated on the throne said, 'I am making everything new!'", hint: "From the throne: 'I am making...'" },
            { id: 6, reference: "Revelation 22:17", verse: "The Spirit and the bride say, 'Come!' And let the one who hears say, 'Come!' Let the one who is thirsty come.", hint: "The Spirit and the bride say..." },
            { id: 7, reference: "Revelation 3:11", verse: "I am coming soon. Hold on to what you have, so that no one will take your crown.", hint: "I am coming soon. Hold on..." },
            { id: 8, reference: "Revelation 1:17-18", verse: "Do not be afraid. I am the First and the Last. I am the Living One; I was dead, and now look, I am alive for ever and ever!", hint: "I was dead, and now I am..." },
            { id: 9, reference: "Revelation 22:20", verse: "He who testifies to these things says, 'Yes, I am coming soon.' Amen. Come, Lord Jesus.", hint: "The Bible's final prayer" },
            { id: 10, reference: "Revelation 5:12", verse: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!", hint: "Worthy is the Lamb..." }
        ]
    }
};

// ===== Encouraging Messages =====
const encouragingMessages = [
    '"For I know the plans I have for you," declares the Lord. Keep going!',
    'Every step forward is a step of faith. You\'re doing great!',
    'The Lord delights in your effort to learn His Word!',
    'Be strong and courageous! Your dedication is beautiful.',
    'His mercies are new every morning. Try again!',
    'You are fearfully and wonderfully made. Keep learning!',
    'The Word of God is living and active. Let it transform you!',
    'Trust in the Lord with all your heart. You\'re growing!',
    'Well done, good and faithful servant!',
    'Your love for Scripture brings joy to the Father\'s heart!'
];

// ===== State Management =====
let currentBook = 'john';
let currentLevel = 'beginner';
let currentCardIndex = 0;
let masteredCards = {};
let incorrectCards = {};
let streak = 0;
let hardModeAttempts = 0;
let hardModeHintWords = [];
let currentVoiceVerse = null;
let hardModeScore = { correct: 0, incorrect: 0 };

// ===== DOM Elements =====
const cardWrapper = document.getElementById('card-wrapper');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const cardCounter = document.getElementById('card-counter');
const tabs = document.querySelectorAll('.tab');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bookSelect = document.getElementById('book-select');
const voiceModal = document.getElementById('voice-modal');
const modalClose = document.getElementById('modal-close');
const speakBtn = document.getElementById('speak-btn');
const verseHint = document.getElementById('verse-hint');
const listeningText = document.getElementById('listening-text');
const speechResult = document.getElementById('speech-result');
const progressiveHint = document.getElementById('progressive-hint');
const attemptIndicator = document.getElementById('attempt-indicator');
const resultsModal = document.getElementById('results-modal');
const scoreNumber = document.getElementById('score-number');
const scoreMessage = document.getElementById('score-message');
const encouragement = document.getElementById('encouragement');
const restartBtn = document.getElementById('restart-btn');
const celebration = document.getElementById('celebration');
const mascotSpeech = document.getElementById('mascot-speech');
const streakCount = document.getElementById('streak-count');
const aboutMeBtn = document.getElementById('about-me-btn');
const aboutModal = document.getElementById('about-modal');
const aboutModalClose = document.getElementById('about-modal-close');

// ===== Initialize App =====
function init() {
    loadProgress();
    renderCard();
    setupEventListeners();
    updateProgress();
    updateNavButtons();
    showMascotMessage("Select a book and start learning! 📖");
}

// ===== Load/Save Progress =====
function loadProgress() {
    const saved = localStorage.getItem('scriptureCardsProgress');
    if (saved) {
        const data = JSON.parse(saved);
        masteredCards = data.masteredCards || {};
        incorrectCards = data.incorrectCards || {};
        streak = data.streak || 0;
        streakCount.textContent = streak;
    }
}

function saveProgress() {
    localStorage.setItem('scriptureCardsProgress', JSON.stringify({
        masteredCards,
        incorrectCards,
        streak
    }));
}

// ===== Get Current Verses =====
function getCurrentVerses() {
    return bibleVersesByBook[currentBook][currentLevel];
}

// ===== Render Single Card =====
function renderCard() {
    const verses = getCurrentVerses();
    const verse = verses[currentCardIndex];
    const key = `${currentBook}-${currentLevel}-${verse.id}`;
    const isMastered = masteredCards[key];
    const isIncorrect = incorrectCards[key];
    const isHard = currentLevel === 'hard';
    const isIntermediate = currentLevel === 'intermediate';
    
    const card = document.createElement('div');
    card.className = `study-card ${isMastered ? 'mastered' : ''} ${isIncorrect ? 'incorrect' : ''}`;
    card.dataset.id = verse.id;
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-header">
                    <span class="card-number">#${currentCardIndex + 1}</span>
                    <div class="card-difficulty">
                        <span class="difficulty-dot ${currentLevel}"></span>
                        ${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
                    </div>
                </div>
                <div class="card-content">
                    <p class="card-prompt">What verse is this?</p>
                    <h3 class="card-reference">${verse.reference}</h3>
                    ${isHard ? '<p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 12px;">🎤 Tap to practice speaking</p>' : ''}
                </div>
                <div class="card-footer">
                    <button class="flip-btn ${isHard ? 'voice-btn' : ''}" data-action="flip">
                        ${isHard ? '🎤 Speak Verse' : '👆 Reveal Verse'}
                    </button>
                </div>
            </div>
            <div class="card-back">
                <div class="card-header">
                    <span class="card-number">#${currentCardIndex + 1}</span>
                    <div class="card-difficulty">
                        <span class="difficulty-dot ${currentLevel}"></span>
                        ${verse.reference}
                    </div>
                </div>
                <div class="card-content">
                    <p class="card-verse">"${verse.verse}"</p>
                    ${isIntermediate && verse.context ? `<div class="card-context">📖 ${verse.context}</div>` : ''}
                </div>
                <div class="card-footer">
                    <button class="flip-btn mastered-btn" data-action="master">
                        ✓ I've Memorized This
                    </button>
                </div>
            </div>
        </div>
    `;
    
    card.verseData = verse;
    
    cardWrapper.innerHTML = '';
    cardWrapper.appendChild(card);
    
    updateCardCounter();
}

// ===== Update Card Counter =====
function updateCardCounter() {
    const verses = getCurrentVerses();
    cardCounter.textContent = `${currentCardIndex + 1} of ${verses.length}`;
}

// ===== Update Navigation Buttons =====
function updateNavButtons() {
    const verses = getCurrentVerses();
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === verses.length - 1;
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLevel = tab.dataset.level;
            currentCardIndex = 0;
            
            // Reset hard mode score when switching to hard
            if (currentLevel === 'hard') {
                hardModeScore = { correct: 0, incorrect: 0 };
            }
            
            renderCard();
            updateProgress();
            updateNavButtons();
            
            const messages = {
                beginner: "Beautiful! Start with these foundational verses 🕊️",
                intermediate: "Wonderful! These verses include helpful context 📜",
                hard: "Courageous! Practice speaking these verses aloud ✝️"
            };
            showMascotMessage(messages[currentLevel]);
        });
    });
    
    // Book selection
    bookSelect.addEventListener('change', (e) => {
        currentBook = e.target.value;
        currentCardIndex = 0;
        if (currentLevel === 'hard') {
            hardModeScore = { correct: 0, incorrect: 0 };
        }
        renderCard();
        updateProgress();
        updateNavButtons();
        showMascotMessage(`Now studying ${e.target.options[e.target.selectedIndex].text}! 📖`);
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            renderCard();
            updateNavButtons();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const verses = getCurrentVerses();
        if (currentCardIndex < verses.length - 1) {
            currentCardIndex++;
            renderCard();
            updateNavButtons();
        } else if (currentLevel === 'hard') {
            // Show results at the end of hard mode
            showResults();
        }
    });
    
    // Card interactions
    cardWrapper.addEventListener('click', (e) => {
        const btn = e.target.closest('.flip-btn');
        if (!btn) return;
        
        const card = btn.closest('.study-card');
        const action = btn.dataset.action;
        
        if (action === 'flip') {
            if (currentLevel === 'hard') {
                openVoiceModal(card.verseData);
            } else {
                card.classList.add('flipped');
            }
        } else if (action === 'master') {
            markAsMastered(card);
        }
    });
    
    // Voice modal
    modalClose.addEventListener('click', closeVoiceModal);
    voiceModal.addEventListener('click', (e) => {
        if (e.target === voiceModal) closeVoiceModal();
    });
    
    speakBtn.addEventListener('click', toggleSpeechRecognition);
    
    // Results modal
    restartBtn.addEventListener('click', () => {
        resultsModal.classList.remove('active');
        currentCardIndex = 0;
        hardModeScore = { correct: 0, incorrect: 0 };
        // Clear incorrect cards for this book/level
        const verses = getCurrentVerses();
        verses.forEach(v => {
            const key = `${currentBook}-${currentLevel}-${v.id}`;
            delete incorrectCards[key];
        });
        renderCard();
        updateNavButtons();
        saveProgress();
    });
    
    // Celebration click to dismiss
    celebration.addEventListener('click', () => {
        celebration.classList.remove('active');
    });
    
    // About Me modal
    aboutMeBtn.addEventListener('click', () => {
        aboutModal.classList.add('active');
    });
    
    aboutModalClose.addEventListener('click', () => {
        aboutModal.classList.remove('active');
    });
    
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('active');
        }
    });
}

// ===== Card Actions =====
function markAsMastered(card) {
    const verse = card.verseData;
    const key = `${currentBook}-${currentLevel}-${verse.id}`;
    
    if (!masteredCards[key]) {
        masteredCards[key] = true;
        delete incorrectCards[key];
        card.classList.add('mastered');
        card.classList.remove('flipped', 'incorrect');
        streak++;
        streakCount.textContent = streak;
        saveProgress();
        updateProgress();
        showCelebration();
        createConfetti();
        
        setTimeout(() => {
            showMascotMessage(encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)]);
        }, 1500);
    } else {
        card.classList.remove('flipped');
    }
}

function markAsIncorrect(verse) {
    const key = `${currentBook}-${currentLevel}-${verse.id}`;
    incorrectCards[key] = true;
    hardModeScore.incorrect++;
    saveProgress();
    renderCard();
}

// ===== Voice Recognition =====
let recognition = null;
let isListening = false;

function openVoiceModal(verse) {
    currentVoiceVerse = verse;
    hardModeAttempts = 0;
    hardModeHintWords = verse.verse.split(' ');
    
    verseHint.textContent = verse.hint || `Say: "${verse.reference}"`;
    voiceModal.classList.add('active');
    speechResult.classList.remove('show', 'success', 'error');
    speechResult.textContent = '';
    progressiveHint.classList.remove('show');
    progressiveHint.textContent = '';
    listeningText.textContent = 'Tap to start speaking';
    speakBtn.classList.remove('listening');
    speakBtn.querySelector('span').textContent = 'Start Speaking';
    
    // Reset attempt indicators
    const dots = attemptIndicator.querySelectorAll('.attempt-dot');
    dots.forEach(dot => dot.classList.remove('used', 'success'));
}

function closeVoiceModal() {
    voiceModal.classList.remove('active', 'listening');
    if (recognition && isListening) {
        recognition.stop();
        isListening = false;
    }
}

function updateAttemptIndicator(attemptNum, success = false) {
    const dots = attemptIndicator.querySelectorAll('.attempt-dot');
    if (attemptNum <= 3) {
        dots[attemptNum - 1].classList.add(success ? 'success' : 'used');
    }
}

function showProgressiveHint() {
    const wordsToShow = Math.min(hardModeAttempts, hardModeHintWords.length);
    if (wordsToShow > 0) {
        progressiveHint.textContent = hardModeHintWords.slice(0, wordsToShow).join(' ') + '...';
        progressiveHint.classList.add('show');
    }
}

function toggleSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        speechResult.textContent = '❌ Speech recognition is not supported in your browser. Please try Chrome.';
        speechResult.classList.add('show', 'error');
        return;
    }
    
    if (isListening) {
        recognition.stop();
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
        isListening = true;
        voiceModal.classList.add('listening');
        speakBtn.classList.add('listening');
        speakBtn.querySelector('span').textContent = 'Listening...';
        listeningText.textContent = 'Speak the verse now...';
        speechResult.classList.remove('show');
    };
    
    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        
        speechResult.textContent = `You said: "${transcript}"`;
        speechResult.classList.add('show');
        speechResult.classList.remove('success', 'error');
        
        if (event.results[0].isFinal) {
            checkSpeechResult(transcript);
        }
    };
    
    recognition.onerror = (event) => {
        isListening = false;
        voiceModal.classList.remove('listening');
        speakBtn.classList.remove('listening');
        speakBtn.querySelector('span').textContent = 'Start Speaking';
        listeningText.textContent = 'Tap to try again';
        
        if (event.error !== 'no-speech') {
            speechResult.textContent = `Error: ${event.error}. Please try again.`;
            speechResult.classList.add('show', 'error');
        }
    };
    
    recognition.onend = () => {
        isListening = false;
        voiceModal.classList.remove('listening');
        speakBtn.classList.remove('listening');
        speakBtn.querySelector('span').textContent = 'Try Again';
        listeningText.textContent = 'Tap to speak again';
    };
    
    recognition.start();
}

function checkSpeechResult(transcript) {
    const normalizedTranscript = transcript.toLowerCase().replace(/[^\w\s]/g, '');
    const normalizedVerse = currentVoiceVerse.verse.toLowerCase().replace(/[^\w\s]/g, '');
    
    // Check for key words match (at least 40% of significant words)
    const verseWords = normalizedVerse.split(/\s+/).filter(w => w.length > 3);
    const spokenWords = normalizedTranscript.split(/\s+/);
    
    let matchCount = 0;
    verseWords.forEach(word => {
        if (spokenWords.some(spoken => spoken.includes(word) || word.includes(spoken))) {
            matchCount++;
        }
    });
    
    const matchPercentage = matchCount / verseWords.length;
    
    if (matchPercentage >= 0.4) {
        // Success!
        speechResult.classList.add('success');
        speechResult.textContent = `✅ Wonderful! You got it right!`;
        updateAttemptIndicator(hardModeAttempts + 1, true);
        hardModeScore.correct++;
        
        setTimeout(() => {
            closeVoiceModal();
            const card = cardWrapper.querySelector('.study-card');
            const key = `${currentBook}-${currentLevel}-${currentVoiceVerse.id}`;
            masteredCards[key] = true;
            card.classList.add('mastered');
            streak++;
            streakCount.textContent = streak;
            saveProgress();
            updateProgress();
            showCelebration();
            createConfetti();
            
            // Move to next card after success
            setTimeout(() => {
                const verses = getCurrentVerses();
                if (currentCardIndex < verses.length - 1) {
                    currentCardIndex++;
                    renderCard();
                    updateNavButtons();
                } else {
                    showResults();
                }
            }, 1500);
        }, 1000);
    } else {
        // Incorrect attempt
        hardModeAttempts++;
        updateAttemptIndicator(hardModeAttempts, false);
        
        if (hardModeAttempts >= 3) {
            // Failed after 3 attempts
            speechResult.classList.add('error');
            speechResult.textContent = `The verse was: "${currentVoiceVerse.verse}"`;
            
            setTimeout(() => {
                closeVoiceModal();
                markAsIncorrect(currentVoiceVerse);
                showMascotMessage("Don't be discouraged! His mercies are new every morning. 🌅");
                
                // Move to next card
                setTimeout(() => {
                    const verses = getCurrentVerses();
                    if (currentCardIndex < verses.length - 1) {
                        currentCardIndex++;
                        renderCard();
                        updateNavButtons();
                    } else {
                        showResults();
                    }
                }, 1500);
            }, 2500);
        } else {
            // Show progressive hint
            showProgressiveHint();
            speechResult.classList.add('error');
            speechResult.textContent = `Keep trying! Here's a hint: "${hardModeHintWords.slice(0, hardModeAttempts).join(' ')}..."`;
        }
    }
}

// ===== Show Results =====
function showResults() {
    const total = 10;
    const correct = hardModeScore.correct;
    const percentage = Math.round((correct / total) * 100);
    
    scoreNumber.textContent = correct;
    
    let message = '';
    if (percentage === 100) {
        message = 'Perfect score! You are a Scripture champion!';
    } else if (percentage >= 80) {
        message = 'Excellent work! You know these verses well!';
    } else if (percentage >= 60) {
        message = 'Good effort! Keep practicing!';
    } else if (percentage >= 40) {
        message = 'You\'re learning! Keep going!';
    } else {
        message = 'Every journey begins with a single step!';
    }
    
    scoreMessage.textContent = message;
    encouragement.textContent = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    
    resultsModal.classList.add('active');
}

// ===== Progress =====
function updateProgress() {
    const verses = getCurrentVerses();
    let mastered = 0;
    
    verses.forEach(verse => {
        const key = `${currentBook}-${currentLevel}-${verse.id}`;
        if (masteredCards[key]) mastered++;
    });
    
    const percentage = (mastered / verses.length) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${mastered}/${verses.length} Mastered`;
}

// ===== Celebration =====
function showCelebration() {
    celebration.classList.add('active');
    
    setTimeout(() => {
        celebration.classList.remove('active');
    }, 2000);
}

function createConfetti() {
    const colors = ['#C17F59', '#D4A574', '#7D8B6A', '#C9A227', '#8B5E3C'];
    
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        const shapes = ['50%', '0'];
        confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// ===== Mascot =====
function showMascotMessage(message) {
    mascotSpeech.querySelector('p').textContent = message;
    mascotSpeech.classList.add('show');
    
    setTimeout(() => {
        mascotSpeech.classList.remove('show');
    }, 5000);
}

// ===== Start App =====
document.addEventListener('DOMContentLoaded', init);
