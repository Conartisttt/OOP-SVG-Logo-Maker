const questions = [
  {
    type: 'input',
    message: 'Enter text for your logo. (Up to three characters)',
    name: 'text',
    validate: (answer) => lengthChecker(answer)
  },
  {
    type: 'input',
    message: 'Enter the text color for your logo (color keywork or hexadecimal number)',
    name: 'textColor',
    validate: (answer) => colorChecker(answer.toLowerCase())
  },
  {
    type: 'list',
    message: 'What shape would you like to create?',
    choices: ["Circle", "Triangle", "Square"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Enter the color for your shape (color keyword or hexadecimal number)',
    name: 'shapeColor',
    validate: (answer) => colorChecker(answer.toLowerCase())

  },
]


function lengthChecker(response) {
  if (response.length > 3) {
    return "Text cannot be greater than 3 characters";
  } else {
    return true;
  }
}

function colorChecker(response) {
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  const colors = "AliceBlue AntiqueWhite Aqua Aquamarine Azure Beige Bisque Black BlanchedAlmond Blue BlueViolet Brown BurlyWood CadetBlue Chocolate Coral CornflowerBlue Cornsilk Crimson Cyan DarkBlue DarkCyan DarkGoldenRod DarkGray DarkGreen DarkKhaki DarkMagenta DarkOliveGreen DarkOrange DarkOrchid DarkRed DarkSalmon DarkSeaGreen DarkSlateBlue DarkSlateGray DarkTurquoise DarkViolet DeepPink DeepSkyBlue DimGray DodgerBlue FireBrick FloralWhite ForestGreen Fuchsia Gainsboro GhostWhite Gold GoldenRod Gray Green GreenYellow HoneyDew HotPink IndianRed Indigo Ivory Khaki Lavender LavenderBlush LawnGreen LemonChiffon LightBlue LightCoral LightCyan LightGoldenRodYellow LightGray LightGreen LightPink LightSalmon LightSeaGreen LightSkyBlue LightSlateGray LightSteelBlue LightYellow Lime LimeGreen Linen Magenta Maroon MediumAquaMarine MediumBlue MediumOrchid MediumPurple MediumSeaGreen MediumSlateBlue MediumSpringGreen MediumTurquoise MediumVioletRed MidnightBlue MintCream MistyRose Moccasin NavajoWhite Navy OldLace Olive OliveDrab Orange OrangeRed Orchid PaleGoldenRod PaleGreen PaleTurquoise PaleVioletRed PapayaWhip PeachPuff Peru Pink Plum PowderBlue Purple Red RosyBrown RoyalBlue SaddleBrown Salmon SandyBrown SeaGreen SeaShell Sienna Silver SkyBlue SlateBlue SlateGray Snow SpringGreen SteelBlue Tan Teal Thistle Tomato Turquoise Violet Wheat White WhiteSmoke Yellow YellowGreen"
  const colorsArr = colors.split(' ');
  const lowercaseColorsArr = colorsArr.map(color => color.toLowerCase());

  if (!response) {
    return "Enter a color"
  } else if (regex.test(response) !== true && (!(lowercaseColorsArr.includes(response)))) {
    return "Enter a valid color, or a color code beginning with #"
  } else {
    return true
  }
}

module.exports = questions;