"use strict"; //for JS support by browsers on mobile devices
if (document.deviceready) {
    document.addEventListener('deviceready', onDeviceReady);
}
else {
    document.addEventListener('DOMContentLoaded', onDeviceReady);
}
let pages = [];
let links = [];
let team = new Array(4);

function onDeviceReady() {
    console.log("Ready");
    serverData.getJSON();
    pages = document.querySelectorAll('[data-role="page"]');
    links = document.querySelectorAll('[data-role="nav"] a');
    document.getElementById('refreshPage').addEventListener("click", function () {
        serverData.getJSON();
    });
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", navigate);
    }
}
//fetching data from server
let serverData = {
    url: "https://griffis.edumedia.ca/mad9014/sports/hockey.php"
    , httpRequest: "GET"
    , getJSON: function () {
        let headers = new Headers();
        headers.append("Content-Type", "text/plain");
        headers.append("Accept", "application/json; charset=utf-8");
        console.dir("headers: " + headers.get("Content-Type"));
        console.dir("headers: " + headers.get("Accept"));
        let options = {
            method: serverData.httpRequest
            , mode: "cors"
            , headers: headers
        };
        let request = new Request(serverData.url, options);
        console.log(request);
        fetch(request).then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {
            setupStandings(data);
            displayData(data);
        }).catch(function (err) {
            alert("Error: " + err.message);
        });
    }
};
//display results
function displayData(data) {
    localStorage.setItem("meng0028", JSON.stringify(data));
    console.log(data);
    console.log(data.teams);
    console.log(data.scores);
    let ul = document.querySelector(".results-list");
    ul.innerHTML = " ";
    data.scores.forEach(function (value) {
        let li = document.createElement("li");
        li.className = "score";
        let h3 = document.createElement("h3");
        h3.textContent = value.date;
        let homeTeam = null;
        let awayTeam = null;
        ul.appendChild(li);
        ul.appendChild(h3);
        let tableResults = document.createElement("table");
        tableResults.className = "resultsTable";
        let theadResults = document.createElement("thead");
        let theadHome = document.createElement("th");
        theadHome.textContent = "Home";
        let theadScore = document.createElement("th");
        theadScore.textContent = "Scores";
        let theadAway = document.createElement("th");
        theadAway.textContent = "Away";
        theadResults.appendChild(theadHome);
        theadResults.appendChild(theadScore);
        theadResults.appendChild(theadAway);
        tableResults.appendChild(theadResults);
        //display home team icon
        value.games.forEach(function (item) {
            homeTeam = getTeamName(data.teams, item.home);
            awayTeam = getTeamName(data.teams, item.away);
            let homeTeamIcon = document.createElement("img");
            if (homeTeam == "Boston Bruins") {
                homeTeamIcon.src = "./img/Boston_Bruins.png";
            }
            else if (homeTeam == "Buffalo Sabers") {
                homeTeamIcon.src = "./img/Buffalo_Sabers.png";
            }
            else if (homeTeam == "Carolina Hurricanes") {
                homeTeamIcon.src = "./img/Carolina_Hurricanes.png";
            }
            else if (homeTeam == "Columbus Blue Jackets") {
                homeTeamIcon.src = "./img/Columbus_Blue_Jackets.png";
            }
            else if (homeTeam == "Detroit Red Wings") {
                homeTeamIcon.src = "./img/Detroit_Red_Wings.png";
            }
            else if (homeTeam == "Florida Panthers") {
                homeTeamIcon.src = "./img/Florida_Panthers.png";
            }
            else if (homeTeam == "Montreal Canadiens") {
                homeTeamIcon.src = "./img/Montreal_Canadiens.png";
            }
            else if (homeTeam == "New Jersey Devils") {
                homeTeamIcon.src = "./img/New_Jersey_Devils.png";
            }
            else if (homeTeam == "New York Islanders") {
                homeTeamIcon.src = "./img/New_York_Islanders.png";
            }
            else if (homeTeam == "New York Rangers") {
                homeTeamIcon.src = "./img/New_York_Rangers.png";
            }
            else if (homeTeam == "Ottawa Senators") {
                homeTeamIcon.src = "./img/Ottawa_Senators.png";
            }
            else if (homeTeam == "Philadelphia Flyers") {
                homeTeamIcon.src = "./img/Philadelphia_Flyers.png";
            }
            else if (homeTeam == "Pittsburgh Penguins") {
                homeTeamIcon.src = "./img/Pittsburgh_Penguins.png";
            }
            else if (homeTeam == "Tampa Bay Lightning") {
                homeTeamIcon.src = "./img/Tampa_Bay_Lightning.png";
            }
            else if (homeTeam == "Toronto Maple Leafs") {
                homeTeamIcon.src = "./img/Toronto_Maple_Leafs.png";
            }
            else if (homeTeam == "Washington Capitals") {
                homeTeamIcon.src = "./img/Washington_Capitals.png";
            }
            //display away team icon
            let awayTeamIcon = document.createElement("img");
            if (awayTeam == "Boston Bruins") {
                awayTeamIcon.src = "./img/Boston_Bruins.png";
            }
            else if (awayTeam == "Buffalo Sabers") {
                awayTeamIcon.src = "./img/Buffalo_Sabers.png";
            }
            else if (awayTeam == "Carolina Hurricanes") {
                awayTeamIcon.src = "./img/Carolina_Hurricanes.png";
            }
            else if (awayTeam == "Columbus Blue Jackets") {
                awayTeamIcon.src = "./img/Columbus_Blue_Jackets.png";
            }
            else if (awayTeam == "Detroit Red Wings") {
                awayTeamIcon.src = "./img/Detroit_Red_Wings.png";
            }
            else if (awayTeam == "Florida Panthers") {
                awayTeamIcon.src = "./img/Florida_Panthers.png";
            }
            else if (awayTeam == "Montreal Canadiens") {
                awayTeamIcon.src = "./img/Montreal_Canadiens.png";
            }
            else if (awayTeam == "New Jersey Devils") {
                awayTeamIcon.src = "./img/New_Jersey_Devils.png";
            }
            else if (awayTeam == "New York Islanders") {
                awayTeamIcon.src = "./img/New_York_Islanders.png";
            }
            else if (awayTeam == "New York Rangers") {
                awayTeamIcon.src = "./img/New_York_Rangers.png";
            }
            else if (awayTeam == "Ottawa Senators") {
                awayTeamIcon.src = "./img/Ottawa_Senators.png";
            }
            else if (awayTeam == "Philadelphia Flyers") {
                awayTeamIcon.src = "./img/Philadelphia_Flyers.png";
            }
            else if (awayTeam == "Pittsburgh Penguins") {
                awayTeamIcon.src = "./img/Pittsburgh_Penguins.png";
            }
            else if (awayTeam == "Tampa Bay Lightning") {
                awayTeamIcon.src = "./img/Tampa_Bay_Lightning.png";
            }
            else if (awayTeam == "Toronto Maple Leafs") {
                awayTeamIcon.src = "./img/Toronto_Maple_Leafs.png";
            }
            else if (awayTeam == "Washington Capitals") {
                awayTeamIcon.src = "./img/Washington_Capitals.png";
            }
            let tbodyResults = document.createElement("tbody");
            let trResults = document.createElement("tr");
            let tdHome = document.createElement("td");
            tdHome.textContent = homeTeam;
            let tdScores = document.createElement("td");
            tdScores.textContent = "    " + item.home_score + " - " + item.away_score + "  ";
            let tdAway = document.createElement("td");
            tdAway.textContent = awayTeam;
            //calculate winning/losing/tied games
            if (item.home_score > item.away_score) {
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == homeTeam) {
                        team[i].wins += 1;
                    }
                }
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == awayTeam) {
                        team[i].loses += 1;
                    }
                }
            }
            else if (item.home_score < item.away_score) {
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == homeTeam) {
                        team[i].loses += 1;
                    }
                }
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == awayTeam) {
                        team[i].wins += 1;
                    }
                }
            }
            else if (item.home_score == item.away_score) {
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == homeTeam) {
                        team[i].ties += 1;
                    }
                }
                for (let i = 0; i < team.length; i++) {
                    if (team[i].name == awayTeam) {
                        team[i].ties += 1;
                    }
                }
            }
            trResults.appendChild(tdHome);
            tdHome.appendChild(homeTeamIcon);
            trResults.appendChild(tdScores);
            trResults.appendChild(tdAway);
            tdAway.appendChild(awayTeamIcon);
            tbodyResults.appendChild(trResults);
            tableResults.appendChild(tbodyResults);
            ul.appendChild(tableResults);
        });
    });
    displayStandings();
}

function getTeamName(teams, id) {
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].id == id) {
            return teams[i].name;
        }
    }
    return "unknown";
}
//function for navigation buttons
function navigate(ev) {
    ev.preventDefault();
    let link = ev.currentTarget;
    console.log(link);
    let id = link.href.split("#")[1]; // get the href page name
    console.log(id);
    //update what is shown in the location bar
    history.replaceState({}, "", link.href);
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id == id) {
            pages[i].classList.add("active");
        }
        else {
            pages[i].classList.remove("active");
        }
    }
}
//initialize data
function setupStandings(data) {
    for (let i = 0; i < team.length; i++) {
        team[i] = {
            name: data.teams[i].name
            , wins: 0
            , loses: 0
            , ties: 0
        };
    }
}
//sorting team rank
function displayStandings() {
    team.sort(function (a, b) {
        let nameA = a.wins;
        let nameB = b.wins;
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
    let tbody = document.querySelector(".standingsBody");
    tbody.innerHTML = " ";
    for (let i = 0; i < team.length; i++) {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = team[i].name;
        let tdW = document.createElement("td");
        tdW.textContent = team[i].wins;
        let tdL = document.createElement("td");
        tdL.textContent = team[i].loses;
        let tdT = document.createElement("td");
        tdT.textContent = team[i].ties;
        let teamIcon = document.createElement("img");
        if (team[i].name == "Boston Bruins") {
            teamIcon.src = "./img/Boston_Bruins.png";
        }
        else if (team[i].name == "Buffalo Sabers") {
            teamIcon.src = "./img/Buffalo_Sabers.png";
        }
        else if (team[i].name == "Carolina Hurricanes") {
            teamIcon.src = "./img/Carolina_Hurricanes.png";
        }
        else if (team[i].name == "Columbus Blue Jackets") {
            teamIcon.src = "./img/Columbus_Blue_Jackets.png";
        }
        else if (team[i].name == "Detroit Red Wings") {
            teamIcon.src = "./img/Detroit_Red_Wings.png";
        }
        else if (team[i].name == "Florida Panthers") {
            teamIcon.src = "./img/Florida_Panthers.png";
        }
        else if (team[i].name == "Montreal Canadiens") {
            teamIcon.src = "./img/Montreal_Canadiens.png";
        }
        else if (team[i].name == "New Jersey Devils") {
            teamIcon.src = "./img/New_Jersey_Devils.png";
        }
        else if (team[i].name == "New York Islanders") {
            teamIcon.src = "./img/New_York_Islanders.png";
        }
        else if (team[i].name == "New York Rangers") {
            teamIcon.src = "./img/New_York_Rangers.png";
        }
        else if (team[i].name == "Ottawa Senators") {
            teamIcon.src = "./img/Ottawa_Senators.png";
        }
        else if (team[i].name == "Philadelphia Flyers") {
            teamIcon.src = "./img/Philadelphia_Flyers.png";
        }
        else if (team[i].name == "Pittsburgh Penguins") {
            teamIcon.src = "./img/Pittsburgh_Penguins.png";
        }
        else if (team[i].name == "Tampa Bay Lightning") {
            teamIcon.src = "./img/Tampa_Bay_Lightning.png";
        }
        else if (team[i].name == "Toronto Maple Leafs") {
            teamIcon.src = "./img/Toronto_Maple_Leafs.png";
        }
        else if (team[i].name == "Washington Capitals") {
            teamIcon.src = "./img/Washington_Capitals.png";
        }
        tdName.appendChild(teamIcon);
        tr.appendChild(tdName);
        tr.appendChild(tdW);
        tr.appendChild(tdL);
        tr.appendChild(tdT);
        tbody.appendChild(tr);
    }
}