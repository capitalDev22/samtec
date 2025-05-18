const config = {
    "jambP": 570,
    "interLock": 510,
    "lockSection": 510,
    "topBottom": 510,
    "headerP": 570,
    "sillP": 570,
    "glass": 170,
    "rubber": 50,
    "woolFile": 100,
    "rollers": 200,
    "lock": 650,
    "guiders": 49,
    "tube": 580,
    "butterFly": 430,
    "jambCover": 300,
    "singleHeader": 400,
    "divider": 480,
    "installPc": 0.275,
    "pOutter": 570,
    "pInner": 570,
    "sideArms": 840,
    "projectHandle": 600,
    "projectBidding": 340,
    "curtainWallingP": 870,
    "curtainWallingPInner": 750,
    "doubleTape": 60,
    "silicone": 400,
    "topRailP": 2812,
    "bottomTrackP": 950,
    "foldingSashP": 1240,
    "foldingBeading": 510,
    "outerFrameP": 510,
    "foldingRubber": 100,
    "foldingRollers": 4000,
    "foldingLock": 3000,
    "foldingGuiders": 2000,
    "foldingHinges": 800,
  };

  const profileDropdownBox = document.getElementById("profileColour");

  profileDropdownBox.addEventListener("change", function() {
  console.log("Selected profile colour changed to:", profileDropdownBox.value);
  updateProfileConfig(profileDropdownBox.value);
  console.log("config.jambP updated to:", config.jambP);
  console.log("config.lockSection updated to:", config.lockSection);
  console.log("config.butterFly updated to:", config.butterFly);
});
  console.log("Initial value of config.jambP:", config.jambP);

  function updateProfileConfig(selectedValue) {
  switch (selectedValue) {
      case "white":
      case "silver":
      case "brown":
        setOuterFrameProfileProperties(570);
        setInnerFrameProfileProperties(510);
        setButterFlyProperties(490);
        setJambCoverProperties(300);
        setProjectedInnerProperties(570);
        setProjectedOuterProperties(570);
        setProjectBiddingProperties(340);
        setSingleHeaderProperties(400);
        setCurtainWallingProperties(890);
      break;

      case "black":
      case "grey":
        setOuterFrameProfileProperties(580);
        setInnerFrameProfileProperties(520);
        setButterFlyProperties(490);
        setJambCoverProperties(320);
        setProjectedInnerProperties(580);
        setProjectedOuterProperties(580);
        setProjectBiddingProperties(340);
        setSingleHeaderProperties(420);
        setSingleHeaderProperties(420);
        setCurtainWallingProperties(920);
      break;

      case "champagne":
        setOuterFrameProfileProperties(580);
        setInnerFrameProfileProperties(520);
        setButterFlyProperties(490);
        setJambCoverProperties(320);
        setProjectedInnerProperties(580);
        setProjectedOuterProperties(580);
        setProjectBiddingProperties(340);
        setSingleHeaderProperties(420);
        setCurtainWallingProperties(920);
      break;

      default:
      break;
      }
    }

    function setOuterFrameProfileProperties(value) {
        config.jambP = value;
        config.headerP = value;
        config.sillP = value;
        config.tube = value;
    }
    function setInnerFrameProfileProperties(value) {
        config.interLock = value;
        config.lockSection = value;
        config.topBottom = value;
        config.divider = value;
  }
    function setButterFlyProperties(value) {
        config.butterFly = value;
  }

    function setJambCoverProperties(value) {
        config.jambCover = value;
    }

    function setProjectedInnerProperties(value) {
        config.pInner = value;
    }

    function setProjectedOuterProperties(value) {
        config.pOutter = value;
    }

    function setProjectBiddingProperties(value) {
        config.projectBidding = value;
    }

    function setSingleHeaderProperties(value) {
        config.singleHeader = value;
    }

    function setCurtainWallingProperties(value) {
        config.curtainWallingP = value;
        config.curtainWallingPInner = value;
    }



