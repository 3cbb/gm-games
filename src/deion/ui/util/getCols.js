// @flow

import { helpers } from ".";
import type { SortOrder, SortType } from "../../common/types";

type Col = {
    desc?: string,
    sortSequence?: SortOrder[],
    sortType?: SortType,
    title?: string, // Should actually be required, but is only added later
};

const cols: {
    [key: string]: Col,
} = {
    "": {
        sortSequence: ["desc", "asc"],
    },
    "#": {},
    "%": {
        desc: "Percentage",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "+/-": {
        desc: "Plus/Minus",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "3P%": {
        desc: "Three Point Percentage",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "3P": {
        desc: "Three Pointers Made",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "3PA": {
        desc: "Three Pointers Attempted",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "3PAr": {
        desc: "Three Point Attempt Rate (3PA / FGA)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    A: {
        desc: "Attempted",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ADT: {
        desc: "All Defensive Team",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ALT: {
        desc: "All League Team",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ART: {
        desc: "All Rookie Team",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Age: {
        sortType: "number",
    },
    Amount: {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    "Asking For": {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    Ast: {
        desc: "Assists Per Game",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "AST%": {
        desc:
            "Percentage of teammate field goals a player assisted while on the floor",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Avg Attendance": {
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    BA: {
        desc: "Blocks Against",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    BR: {
        desc: "Best Record",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    BRC: {
        desc: "Best Conference Record",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Blk: {
        desc: "Blocks",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "BLK%": {
        desc: "Percentage of opponent two-pointers blocked",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Cash: {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    Championships: {
        desc: "Championships Won",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Conference: {},
    Contract: {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    Count: {
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Country: {},
    "Current Contract": {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    DPOY: {
        desc: "Defensive Player of the Year",
        sortType: "name",
    },
    DRB: {
        desc: "Defensive Rebounds",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "DRB%": {
        desc: "Percentage of available defensive rebounds grabbed",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    DRtg: {
        desc: "Defensive Rating (points allowed per 100 possessions)",
        sortSequence: ["asc", "desc"],
        sortType: "number",
    },
    DWS: {
        desc: "Defensive Win Shares",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Desired Contract": {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    Division: {},
    Draft: {
        sortSequence: [],
    },
    "Draft Picks": {
        sortSequence: [],
    },
    Drafted: {},
    EWA: {
        desc: "Estimated Wins Added",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "FG%": {
        desc: "Field Goal Percentage",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    FG: {
        desc: "Field Goals Made",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    FGA: {
        desc: "Field Goals Attempted",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "FT%": {
        desc: "Free Throw Percentage",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    FT: {
        desc: "Free Throws Made",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    FTA: {
        desc: "Free Throws Attempted",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    FTr: {
        desc: "Free Throw Attempt Rate (FTA / FGA)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Finals: {
        desc: "Finals Appearances",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Finals MVP": {
        desc: "Finals Most Valuable Player",
        sortType: "name",
    },
    G: {
        desc: "Games Played",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    GS: {
        desc: "Games Started",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    GmSc: {
        desc: "Game Score",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    HOF: {
        sortSequence: ["desc", "asc"],
    },
    L: {
        desc: "Losses",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    L10: {
        desc: "Last Ten Games",
        sortSequence: ["desc", "asc"],
        sortType: "lastTen",
    },
    Last: {
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Last Playoffs": {
        sortType: "number",
    },
    "Last Season": {
        desc: "Last Season with Team",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Last Title": {
        sortType: "number",
    },
    "League Champion": {},
    M: {
        desc: "Made",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    MIP: {
        desc: "Most Improved Player",
        sortType: "name",
    },
    MVP: {
        desc: "Most Valuable Player",
        sortType: "name",
    },
    Min: {
        desc: "Minutes Per Game",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Mood: {},
    MOV: {
        desc: "Margin of Victory",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Name: {
        sortType: "name",
    },
    NRtg: {
        desc: "Net Rating (point differential per 100 possessions)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Negotiate: {},
    O: {
        desc: "Overall",
        sortType: "number",
    },
    OPts: {
        desc: "Opponent's Points",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ORB: {
        desc: "Offensive Rebounds",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "ORB%": {
        desc: "Percentage of available offensive rebounds grabbed",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ORtg: {
        desc: "Offensive Rating (points produced/scored per 100 possessions)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    OWS: {
        desc: "Offensive Win Shares",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Opp: {
        desc: "Opponent",
    },
    Ovr: {
        desc: "Overall Rating",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    P: {
        desc: "Performance",
        sortType: "number",
    },
    PER: {
        desc: "Player Efficiency Rating",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    PF: {
        desc: "Personal Fouls",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    PL: {
        desc:
            "Pythagorean Losses (expected losses based on points scored and allowed)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    PPG: {
        desc: "Points Per Game",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    PW: {
        desc:
            "Pythagorean Wins (expected wins based on points scored and allowed)",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Pace: {
        desc: "Possessions Per Game",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Payroll: {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    "Peak Ovr": {
        desc: "Peak Overall Rating",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Pick: {
        desc: "Draft Pick",
        sortType: "draftPick",
    },
    Playoffs: {
        desc: "Playoff Appearances",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Pos: {
        desc: "Position",
    },
    Pot: {
        desc: "Potential Rating",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "Profit (YTD)": {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    Pts: {
        desc: "Points",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    ROY: {
        desc: "Rookie of the Year",
        sortType: "name",
    },
    Reb: {
        desc: "Rebounds Per Game",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Result: {},
    Retired: {
        sortSequence: ["desc", "asc"],
    },
    "Revenue (YTD)": {
        sortSequence: ["desc", "asc"],
        sortType: "currency",
    },
    "Runner Up": {},
    SMOY: {
        desc: "Sixth Man of the Year",
        sortType: "name",
    },
    Season: {
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Skills: {},
    Stl: {
        desc: "Steals",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "STL%": {
        desc: "Percentage of opponent possessions ending in steals",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    T: {
        desc: "Talent",
        sortType: "number",
    },
    TRB: {
        desc: "Total Rebounds",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "TRB%": {
        desc: "Percentage of available rebounds grabbed",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "TS%": {
        desc: "True Shooting Percentage",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Tov: {
        desc: "Turnovers",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "TOV%": {
        desc: "Turnovers per 100 plays",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    Team: {},
    "USG%": {
        desc: "Percentage of team plays used",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    W: {
        desc: "Wins",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    WS: {
        desc: "Win Shares",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "WS/48": {
        desc: "Win Shares Per 48 Minutes",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    X: {
        desc: "Exclude from counter offers",
        sortSequence: [],
    },
    Year: {},

    "rating:fg": {
        desc: "Two-Point Shooting",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:tp": {
        desc: "Three-Point Shooting",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:oiq": {
        desc: "Offensive IQ",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:dnk": {
        desc: "Dunks/Layups",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:drb": {
        desc: "Dribbling",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:endu": {
        desc: "Endurance",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:hgt": {
        desc: "Height",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:ins": {
        desc: "Inside Scoring",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:jmp": {
        desc: "Jumping",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:ft": {
        desc: "Free Throw Shooting",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:pss": {
        desc: "Passing",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:reb": {
        desc: "Rebounding",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:spd": {
        desc: "Speed",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:diq": {
        desc: "Defensive IQ",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
    "rating:stre": {
        desc: "Strength",
        sortSequence: ["desc", "asc"],
        sortType: "number",
    },
};

const titleOverrides = {
    "rating:fg": "2Pt",
    "rating:tp": "3Pt",
    "rating:oiq": "oIQ",
    "rating:dnk": "Dnk",
    "rating:drb": "Drb",
    "rating:endu": "End",
    "rating:hgt": "Hgt",
    "rating:ins": "Ins",
    "rating:jmp": "Jmp",
    "rating:ft": "FT",
    "rating:pss": "Pss",
    "rating:reb": "Reb",
    "rating:spd": "Spd",
    "rating:diq": "dIQ",
    "rating:stre": "Str",
};

for (const key of Object.keys(cols)) {
    if (key.startsWith("rating:")) {
        cols[key].title = titleOverrides[key];
    } else {
        cols[key].title = key;
    }
}

export default (...titles: string[]): Col[] => {
    return titles.map(title => {
        if (!cols.hasOwnProperty(title)) {
            throw new Error(`Unknown column: "${title}"`);
        }

        // Deep copy so other properties can be set on col, like width
        return helpers.deepCopy(cols[title]);
    });
};
