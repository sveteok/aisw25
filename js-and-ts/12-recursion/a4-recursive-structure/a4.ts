interface MainWindowI {
  name: string;
  width: number;
  height: number;
  children: (ButtonExitI | SettingsWindowI | ProfileWindowI)[];
}

interface ButtonExitI {
  name: string;
  width: number;
  height: number;
  children: any[];
}

interface ButtonReturnToMenuI {
  name: string;
  width: number;
  height: number;
  children: any[];
}
interface ProfileInfoPanelI {
  name: string;
  width: number;
  height: number;
  children: any[];
}

interface SettingsWindowI {
  name: string;
  width: number;
  height: number;
  children: ButtonReturnToMenuI[];
}
interface ProfileWindowI {
  name: string;
  width: number;
  height: number;
  children: ProfileInfoPanelI[];
}

function buildUserInterface() {
  const mainWindow: MainWindowI = {
    name: "MainWindow",
    width: 600,
    height: 400,
    children: [],
  };
  const buttonExit: ButtonExitI = {
    name: "ButtonExit",
    width: 100,
    height: 30,
    children: [],
  };
  mainWindow.children.push(buttonExit);

  const settingsWindow: SettingsWindowI = {
    name: "SettingsWindow",
    width: 400,
    height: 300,
    children: [],
  };
  const buttonReturnToMenu: ButtonReturnToMenuI = {
    name: "ButtonReturnToMenu",
    width: 100,
    height: 30,
    children: [],
  };
  settingsWindow.children.push(buttonReturnToMenu);
  mainWindow.children.push(settingsWindow);

  const profileWindow: ProfileWindowI = {
    name: "ProfileWindow",
    width: 500,
    height: 400,
    children: [],
  };
  const profileInfoPanel: ProfileInfoPanelI = {
    name: "ProfileInfoPanel",
    width: 200,
    height: 200,
    children: [],
  };
  profileWindow.children.push(profileInfoPanel);
  mainWindow.children.push(profileWindow);

  return mainWindow;
}

// a) Copy the code above to your program.
// console.log the user interface control tree to see the whole structure.
const userInterfaceTree = buildUserInterface();
// console.log(userInterfaceTree); // prints the whole structure without SettingsWindow and ProfileWindow details
console.log(JSON.stringify(userInterfaceTree, null, 2));

/*
Output:
{
  "name": "MainWindow",
  "width": 600,
  "height": 400,
  "children": [
    {
      "name": "ButtonExit",
      "width": 100,
      "height": 30,
      "children": []
    },
    {
      "name": "SettingsWindow",
      "width": 400,
      "height": 300,
      "children": [
        {
          "name": "ButtonReturnToMenu",
          "width": 100,
          "height": 30,
          "children": []
        }
      ]
    },
    {
      "name": "ProfileWindow",
      "width": 500,
      "height": 400,
      "children": [
        {
          "name": "ProfileInfoPanel",
          "width": 200,
          "height": 200,
          "children": []
        }
      ]
    }
  ]
}
  */

//b) Write a recursive function that prints out the names of all the controls in the user interface control tree.
// Call the function with the root of the tree.

type Control =
  | MainWindowI
  | ButtonExitI
  | SettingsWindowI
  | ProfileWindowI
  | ButtonReturnToMenuI
  | ProfileInfoPanelI;

const findControl = (control: Control, name: string): Control | null => {
  if (control.name === name) {
    return control;
  }
  for (const child of control.children) {
    const found = findControl(child, name);
    if (found !== null) {
      return found;
    }
  }
  return null;
};

const foundControl = findControl(userInterfaceTree, "SettingsWindow");
if (foundControl !== null) {
  console.log(`Found control: ${JSON.stringify(foundControl, null, 2)}`);
} else {
  console.log("Control not found");
}
/*
Output:
Found control: {
  "name": "SettingsWindow",
  "width": 400,
  "height": 300,
  "children": [
    {
      "name": "ButtonReturnToMenu",
      "width": 100,
      "height": 30,
      "children": []
    }
  ]
}
 */

const profileInfoPanel = findControl(userInterfaceTree, "ProfileInfoPanel");
if (profileInfoPanel !== null) {
  profileInfoPanel.width += 100;
  console.log(profileInfoPanel);
} else {
  console.log("Control not found");
}
/*
Output:
{ name: 'ProfileInfoPanel', width: 300, height: 200, children: [] }
 */
