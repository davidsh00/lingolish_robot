import { useEffect, useRef, useState } from "react";
import UserInput from "./components/user-input";
import WordList from "./components/word-list";
import style from "./style/app.module.css";
const dic = [
  "ABOUT",
  "ABOVE",
  "ACTOR",
  "ACUTE",
  "ADEPT",
  "ADMIT",
  "ADOPT",
  "ADORE",
  "ADULT",
  "AFTER",
  "AGILE",
  "AGREE",
  "AISLE",
  "ALBUM",
  "ALERT",
  "ALIEN",
  "ALIKE",
  "ALIVE",
  "ALLOW",
  "ALONG",
  "ALOUD",
  "ALTER",
  "AMBER",
  "AMEND",
  "AMPLE",
  "AMPLY",
  "AMUSE",
  "ANGEL",
  "ANGLE",
  "ANKLE",
  "APPLE",
  "APPLY",
  "APRON",
  "ARROW",
  "ASSET",
  "AVERT",
  "AVOID",
  "BACON",
  "BAKER",
  "BASIC",
  "BASIL",
  "BASIN",
  "BATHE",
  "BEACH",
  "BEARD",
  "BEAST",
  "BEATS",
  "BEGIN",
  "BEGUN",
  "BEING",
  "BELOW",
  "BIRCH",
  "BIRTH",
  "BLACK",
  "BLANK",
  "BLINK",
  "BLOWN",
  "BLUSH",
  "BOARD",
  "BOAST",
  "BONUS",
  "BOOST",
  "BOUND",
  "BOWEL",
  "BRAID",
  "BRAIN",
  "BRAKE",
  "BRAND",
  "BRAVE",
  "BREAD",
  "BREAK",
  "BRIDE",
  "BRIEF",
  "BRING",
  "BRISK",
  "BROKE",
  "BROOM",
  "BROWN",
  "BULKY",
  "BUNCH",
  "BUYER",
  "CABIN",
  "CABLE",
  "CAMEL",
  "CANDY",
  "CATER",
  "CHAIN",
  "CHAIR",
  "CHALK",
  "CHARM",
  "CHART",
  "CHASM",
  "CHEAP",
  "CHIEF",
  "CHINA",
  "CHIPS",
  "CHOKE",
  "CHOPS",
  "CIGAR",
  "CLAIM",
  "CLAMP",
  "CLASP",
  "CLASS",
  "CLEAN",
  "CLEAR",
  "CLIMB",
  "CLOAK",
  "CLONE",
  "CLOSE",
  "CLOTH",
  "CLOUD",
  "CLOVE",
  "CLOWN",
  "COAST",
  "CORAL",
  "COUNT",
  "CRAFT",
  "CRANE",
  "CRANK",
  "CRAWL",
  "CRISP",
  "CROSS",
  "CROWD",
  "CROWN",
  "CRUSH",
  "CRUST",
  "CURVE",
  "DAILY",
  "DAIRY",
  "DANCE",
  "DATUM",
  "DECAY",
  "DECOR",
  "DELAY",
  "DEVIL",
  "DIARY",
  "DINER",
  "DIRTY",
  "DISCO",
  "DIVER",
  "DOUBT",
  "DOUGH",
  "DRAFT",
  "DRAIN",
  "DRAWN",
  "DREAM",
  "DRESS",
  "DRINK",
  "DRIVE",
  "EARLY",
  "EARTH",
  "EIGHT",
  "ELBOW",
  "EMAIL",
  "EMPTY",
  "ENJOY",
  "EQUAL",
  "EQUIP",
  "ETHIC",
  "EXACT",
  "EXIST",
  "EXTRA",
  "FACET",
  "FAIRY",
  "FAITH",
  "FALSE",
  "FANCY",
  "FAULT",
  "FAVOR",
  "FEAST",
  "FETCH",
  "FIBER",
  "FIELD",
  "FINAL",
  "FIRST",
  "FLAIR",
  "FLAKE",
  "FLASK",
  "FLICK",
  "FLOAT",
  "FLOCK",
  "FLOWN",
  "FLUSH",
  "FLUTE",
  "FOCAL",
  "FOCUS",
  "FORCE",
  "FORUM",
  "FOUND",
  "FRAME",
  "FRANK",
  "FRAUD",
  "FRESH",
  "FRONT",
  "FROST",
  "FROZE",
  "FRUIT",
  "FUNGI",
  "FUNNY",
  "GHOST",
  "GIVEN",
  "GLASS",
  "GLAZE",
  "GLOBE",
  "GLORY",
  "GLOVE",
  "GRACE",
  "GRADE",
  "GRAIN",
  "GRAND",
  "GRAPE",
  "GRAPH",
  "GRASP",
  "GRASS",
  "GRAVY",
  "GREAT",
  "GREET",
  "GRILL",
  "GROUP",
  "GROWN",
  "GUARD",
  "GUESS",
  "GUEST",
  "GUIDE",
  "HABIT",
  "HAIRY",
  "HAPPY",
  "HARDY",
  "HASTE",
  "HAUNT",
  "HEART",
  "HEAVY",
  "HEFTY",
  "HONEY",
  "HORSE",
  "HOTEL",
  "HOUSE",
  "HUMAN",
  "HUMID",
  "HUMOR",
  "HUSKY",
  "IDEAL",
  "IMAGE",
  "IMPLY",
  "INCUR",
  "INDEX",
  "INFER",
  "INFRA",
  "INLET",
  "INNER",
  "INPUT",
  "INSET",
  "IVORY",
  "JEANS",
  "JOINT",
  "JUICE",
  "LABOR",
  "LADEN",
  "LAPSE",
  "LARGE",
  "LATEX",
  "LAUGH",
  "LAYER",
  "LEAFY",
  "LEANS",
  "LEARN",
  "LEMON",
  "LIGHT",
  "LINER",
  "LIVER",
  "LIVES",
  "LODGE",
  "LOFTY",
  "LOGIC",
  "LOVER",
  "LOWER",
  "LUCID",
  "LUCKY",
  "LUNCH",
  "LYMPH",
  "MACRO",
  "MAGIC",
  "MAIZE",
  "MAJOR",
  "MAKER",
  "MANGO",
  "MAPLE",
  "MARCH",
  "MATCH",
  "MEDAL",
  "MEDIA",
  "MERCY",
  "MERIT",
  "METAL",
  "MICRO",
  "MIDST",
  "MIGHT",
  "MINOR",
  "MINUS",
  "MIXER",
  "MODEL",
  "MOIST",
  "MONEY",
  "MONTH",
  "MORAL",
  "MOUNT",
  "MOUSE",
  "MOUTH",
  "MOVER",
  "MOVIE",
  "MULTI",
  "MUSIC",
  "NAIVE",
  "NEWLY",
  "NEXUS",
  "NICHE",
  "NIGHT",
  "NINJA",
  "NOBLE",
  "NODAL",
  "NOISE",
  "NOISY",
  "NORTH",
  "NOTCH",
  "NOTED",
  "NOVEL",
  "NURSE",
  "OCEAN",
  "OFTEN",
  "OLIVE",
  "ONSET",
  "OPERA",
  "OPTIC",
  "ORBIT",
  "ORGAN",
  "OTHER",
  "OUGHT",
  "OUNCE",
  "OUTER",
  "OVERT",
  "OWING",
  "OWNED",
  "OWNER",
  "OXIDE",
  "PACED",
  "PAINT",
  "PANIC",
  "PANTS",
  "PARTY",
  "PASTE",
  "PATCH",
  "PATIO",
  "PAUSE",
  "PAVED",
  "PAYER",
  "PEACH",
  "PEARL",
  "PEDAL",
  "PHASE",
  "PHONE",
  "PIANO",
  "PILOT",
  "PINCH",
  "PIVOT",
  "PIZZA",
  "PLACE",
  "PLAIN",
  "PLANE",
  "PLANK",
  "PLANT",
  "PLATE",
  "PLEAD",
  "PLUCK",
  "POINT",
  "POKER",
  "POLAR",
  "PORCH",
  "POUCH",
  "POUND",
  "POWER",
  "PRESS",
  "PRICE",
  "PRIDE",
  "PRIME",
  "PRINT",
  "PRIZE",
  "PRONE",
  "PROUD",
  "PROVE",
  "PUNCH",
  "PUPPY",
  "PURGE",
  "PURSE",
  "QUAIL",
  "QUEEN",
  "QUERY",
  "QUEST",
  "QUICK",
  "QUIET",
  "QUILT",
  "QUITE",
  "QUOTA",
  "QUOTE",
  "RADIO",
  "RAINY",
  "RAISE",
  "RANCH",
  "RANGE",
  "RAPID",
  "RATIO",
  "REACH",
  "REACT",
  "READY",
  "REALM",
  "REGAL",
  "REIGN",
  "RELAX",
  "RELAY",
  "RELIC",
  "REMIT",
  "REPAY",
  "REPLY",
  "RESIN",
  "RIDGE",
  "RIGHT",
  "RINSE",
  "RISKY",
  "RIVAL",
  "ROAST",
  "ROCKY",
  "ROMAN",
  "ROUGH",
  "ROUND",
  "ROYAL",
  "RUSTY",
  "SADLY",
  "SAINT",
  "SALON",
  "SALTY",
  "SANDY",
  "SATIN",
  "SAUCE",
  "SCALE",
  "SCARE",
  "SCARF",
  "SCARY",
  "SCENT",
  "SCORE",
  "SCOUT",
  "SCREW",
  "SERUM",
  "SETUP",
  "SHADE",
  "SHADY",
  "SHAKE",
  "SHAKY",
  "SHAME",
  "SHAPE",
  "SHARE",
  "SHARK",
  "SHARP",
  "SHAVE",
  "SHEAR",
  "SHELF",
  "SHELL",
  "SHIFT",
  "SHINE",
  "SHIRT",
  "SHOCK",
  "SHORE",
  "SHORT",
  "SHOUT",
  "SHOVE",
  "SHOWN",
  "SHRUB",
  "SHRUG",
  "SIGHT",
  "SIGMA",
  "SILKY",
  "SINCE",
  "SIXTY",
  "SKATE",
  "SKILL",
  "SKIRT",
  "SLACK",
  "SLATE",
  "SLEEP",
  "SLEPT",
  "SLICE",
  "SLICK",
  "SLIDE",
  "SLING",
  "SLUMP",
  "SMALL",
  "SMART",
  "SMILE",
  "SMOKE",
  "SMOKY",
  "SNACK",
  "SNAIL",
  "SNAKE",
  "SNEAK",
  "SOBER",
  "SOLAR",
  "SOLVE",
  "SOUND",
  "SOUTH",
  "SPACE",
  "SPADE",
  "SPARE",
  "SPARK",
  "SPEAK",
  "SPEAR",
  "SPELL",
  "SPICE",
  "SPICY",
  "SPIKE",
  "SPILL",
  "SPINE",
  "SPLIT",
  "SPOIL",
  "SPOKE",
  "SPORT",
  "SPRAY",
  "SQUAD",
  "SQUAT",
  "SQUID",
  "STACK",
  "STAFF",
  "STAGE",
  "STAIN",
  "STAIR",
  "STAKE",
  "STALE",
  "STAMP",
  "STAND",
  "STARE",
  "STEAD",
  "STEAK",
  "STEAL",
  "STEAM",
  "STEEL",
  "STERN",
  "STICK",
  "STILL",
  "STING",
  "STOCK",
  "STONE",
  "STORE",
  "STORM",
  "STORY",
  "STOVE",
  "STRAP",
  "STRAW",
  "STRAY",
  "STUCK",
  "STUDY",
  "STUFF",
  "STUMP",
  "STYLE",
  "SUGAR",
  "SUITE",
  "SUNNY",
  "SUPER",
  "SWAMP",
  "SWEAT",
  "SWEPT",
  "SWIFT",
  "SWINE",
  "SWING",
  "SWIRL",
  "SYRUP",
  "TABLE",
  "TAKEN",
  "TEACH",
  "TEMPO",
  "THANK",
  "THEIR",
  "THICK",
  "THING",
  "THINK",
  "THIRD",
  "THORN",
  "THOSE",
  "THREE",
  "THROW",
  "THUMB",
  "THYME",
  "TIDAL",
  "TIGER",
  "TIMER",
  "TODAY",
  "TOKEN",
  "TONIC",
  "TOUCH",
  "TOUGH",
  "TOWEL",
  "TOWER",
  "TOXIC",
  "TOXIN",
  "TRACE",
  "TRACK",
  "TRADE",
  "TRAIL",
  "TRAIN",
  "TRASH",
  "TREAD",
  "TREND",
  "TRIAD",
  "TRIAL",
  "TRIBE",
  "TRICK",
  "TWICE",
  "TWINS",
  "ULCER",
  "ULTRA",
  "UNCLE",
  "UNDER",
  "UNIFY",
  "UNITE",
  "UNITY",
  "UPSET",
  "URBAN",
  "USAGE",
  "VAGUE",
  "VALID",
  "VALUE",
  "VIDEO",
  "VIRAL",
  "VITAL",
  "VOCAL",
  "VODKA",
  "VOICE",
  "VOWEL",
  "WAFER",
  "WAGED",
  "WAGER",
  "WAGON",
  "WAIST",
  "WAIVE",
  "WASTE",
  "WATCH",
  "WATER",
  "WEARY",
  "WEIGH",
  "WEIRD",
  "WHALE",
  "WHARF",
  "WHEAT",
  "WHILE",
  "WHITE",
  "WHOLE",
  "WHOSE",
  "WIDEN",
  "WIDTH",
  "WINDY",
  "WOMAN",
  "WOMEN",
  "WORLD",
  "WORSE",
  "WORST",
  "WORTH",
  "WOULD",
  "WOUND",
  "WOVEN",
  "WRECK",
  "WRITE",
  "WRONG",
  "YEAST",
  "YIELD",
  "YOUNG",
  "YOUTH",
];
function App() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [enterdWords, setEnterdWords] = useState([]);
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [similars, setSimilars] = useState([]);
  const wordListRef = useRef();
  function robotAnswer(dataList, cb) {
    const wordData = {
      length: dataList[0]?.length || 0,
      exist: calcExistLetter(dataList),
      correct: calcCorrectLetter(dataList),
      notExist: calcNotExistLetter(dataList),
    };
    console.log(wordData);
    let newSimilar;
    if (similars.length === 0) {
      newSimilar = findSimilars(dic, wordData);
    } else {
      newSimilar = findSimilars(similars, wordData);
    }
    const suggestIndex = Math.round(Math.random() * (newSimilar.length - 1));
    cb(newSimilar[suggestIndex]);
    if (newSimilar.length === 1) {
      setSimilars(newSimilar);
    } else {
      setSimilars(() => [
        ...newSimilar.filter((item) => item !== newSimilar[suggestIndex]),
      ]);
    }
    function findSimilars(dic, obj) {
      const { length: len, exist, correct, notExist } = obj;
      const filteredExistLetter = filterByletters(
        dic,
        [...Object.keys(exist), ...correct.filter((item) => item != null)],
        len
      );
      return filteredExistLetter;
    }
    function filterByletters(words, letters, length) {
      const reg = new RegExp(
        `${letters.map((letter) => `(?=.*${letter})`).join("")}.{${length}}`,
        "i"
      );
      const filterItems = words.filter((word) => reg.test(word));
      return filterItems.map((item) => item.toLowerCase());
    }
    function calcNotExistLetter(dataList) {
      const letters = [];
      dataList.forEach((word) => {
        word.forEach((letter) => {
          if (letter.type !== "exist" && letter.type !== "correct") {
            if (!letters.includes(letter.letter)) {
              letters.push(letter.letter);
            }
          }
        });
      });
      return letters;
    }
    function calcCorrectLetter(dataList) {
      const wordArr = Array(dataList[0]?.length || 0).fill(null);
      dataList.forEach((word) => {
        word.forEach((letter, i) => {
          if (letter.type === "correct") {
            wordArr[i] = letter.letter;
          }
        });
      });
      return wordArr;
    }
    function calcExistLetter(dataList) {
      const letters = {};
      dataList.forEach((word) => {
        word.forEach((letter, i) => {
          if (letter.type === "exist") {
            if (!letters[letter.letter]) {
              letters[letter.letter] = [i];
            } else {
              if (!letters[letter.letter].includes(i)) {
                letters[letter.letter] = [...letters[letter.letter], i];
              }
            }
          }
        });
      });
      return letters;
    }
  }
  function addWord(word) {
    setEnterdWords((prev) => {
      const selectedWordArr = [...selectedWord];
      const letters = [];
      word.split("").forEach((letter, i) => {
        if (selectedWordArr.includes(letter)) {
          if (selectedWordArr[i] === letter) {
            if (
              selectedWordArr.filter((item) => item === letter).length >
              letters.filter(
                (item) => item.letter === letter && item?.type === "correct"
              ).length
            ) {
              letters[i] = { letter, type: "correct" };
            }
          }
        }
      });
      word.split("").forEach((letter, i) => {
        let status = "";
        if (!letters[i]) {
          if (
            selectedWordArr.includes(letter) &&
            selectedWordArr.filter((item) => item === letter).length >
              letters.filter(
                (item) =>
                  item.letter === letter &&
                  (item?.type === "exist" || item?.type === "correct")
              ).length
          ) {
            status = "exist";
          }
          letters[i] = { letter, type: status };
        }
      });
      return [...prev, letters];
    });
  }
  function userAddWord(word) {
    if (isUserTurn) {
      addWord(word);
      setIsUserTurn(false);
    }
  }
  function selectRandomWord() {
    setSelectedWord(() => {
      return dic
        .filter((item) => item.length === 5)
        [Math.round(Math.random() * dic.length)].toLowerCase();
    });
  }
  function reset() {
    selectRandomWord();
    setEnterdWords([]);
    setIsUserTurn(true);
    setSimilars([]);
  }
  useEffect(() => {
    selectRandomWord();
  }, []);

  useEffect(() => {
    wordListRef.current.scrollDown();
    if (
      enterdWords.length > 0 &&
      enterdWords[enterdWords.length - 1].reduce(
        (prev, cu) => (prev += cu.letter),
        ""
      ) === selectedWord
    ) {
      alert(`${!isUserTurn ? "user" : "robot"} win - ${selectedWord}`);
      reset();
    }
  }, [enterdWords]);
  useEffect(() => {
    if (
      !isUserTurn &&
      enterdWords.length > 0 &&
      enterdWords[enterdWords.length - 1]
        .map((item) => item.letter)
        .join("") !== selectedWord
    ) {
      robotAnswer(enterdWords, addWord);
      setIsUserTurn(true);
    }
  }, [isUserTurn]);

  return (
    <div className="App">
      <div className={style.container}>
        <div className={style["word-selected"]}>{selectedWord}</div>
        <WordList list={enterdWords} ref={wordListRef} />
        <UserInput length={5} enable={isUserTurn} onSubmit={userAddWord} />
      </div>
    </div>
  );
}

export default App;
