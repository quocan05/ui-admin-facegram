/*
  json-format
  https://github.com/luizstacio/json-format

*/
let p: string[] = [];

const indentConfig = {
  tab: { char: "\t", size: 1 },
  space: { char: " ", size: 2 },
};
const configDefault: IConfig = {
  type: "space",
};
const push = function (m: string) {
  return "\\" + p.push(m) + "\\";
};
const pop = function (m: string, i: number) {
  return p[i - 1];
};
const tabs = function (count: number, indentType: string) {
  return new Array(count + 1).join(indentType);
};

function JSONFormat(json: string, indentType: string) {
  const p = [];
  var out = "",
    indent = 0;

  // Extract backslashes and strings
  json = json
    .replace(/\\./g, push)
    .replace(/(".*?"|'.*?')/g, push)
    .replace(/\s+/, "");

  // Indent and insert newlines
  for (var i = 0; i < json.length; i++) {
    var c = json.charAt(i);

    switch (c) {
      case "{":
      case "[":
        out += c + "\n" + tabs(++indent, indentType);
        break;
      case "}":
      case "]":
        out += "\n" + tabs(--indent, indentType) + c;
        break;
      case ",":
        out += ",\n" + tabs(indent, indentType);
        break;
      case ":":
        out += ": ";
        break;
      default:
        out += c;
        break;
    }
  }

  // Strip whitespace from numeric arrays and put backslashes
  // and strings back in
  out = out
    .replace(/\[[\d,\s]+?\]/g, function (m) {
      return m.replace(/\s/g, "");
    })
    .replace(/\\(\d+)\\/g, pop) // strings
    .replace(/\\(\d+)\\/g, pop); // backslashes in strings

  return out;
}

type IConfig = {
  type: string;
  size?: number;
};

export default function formatJSON(json: JSON, config?: IConfig) {
  config = config || configDefault;
  var indent = indentConfig[config.type as keyof typeof indentConfig];

  if (indent == null) {
    throw new Error('Unrecognized indent type: "' + config.type + '"');
  }
  var indentType = new Array((config.size || indent.size) + 1).join(
    indent.char
  );
  return JSONFormat(JSON.stringify(json), indentType);
}
