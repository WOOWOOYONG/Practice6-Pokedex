"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var pokeContainer = document.getElementById('poke_container');
var toggleButton = document.querySelector('.toggle-button');
var navbarbuttons = document.querySelector('.topnav');
var loading = document.getElementById('loading');
var body = document.body;
var typeColor = {
    bug: '#7fab6c',
    dragon: '#25398f',
    electric: '#fed330',
    fairy: '#ff0069',
    fighting: '#30336b',
    fire: '#f0932b',
    flying: '#7ccdea',
    grass: '#00b894',
    ground: '#efb549',
    ghost: '#a55eea',
    ice: '#aac8e6',
    normal: '#95afc0',
    poison: '#6c5ce7',
    psychic: '#a29bfe',
    rock: '#b09e6b',
    water: '#0190ff',
    dark: '#525151',
    steel: '#aba9a1'
};
// 取得資料
var getPokemon = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var url, res, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
                return [4 /*yield*/, fetch(url)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// 建立pokemon卡片
var createPokemonCard = function (pokemon) {
    var id = pokemon.id, stats = pokemon.stats, name = pokemon.name, sprites = pokemon.sprites, types = pokemon.types;
    var pokemonEl = document.createElement('div');
    var hp = stats[0].base_stat;
    var statAttack = stats[1].base_stat;
    var statDefense = stats[2].base_stat;
    var statSpeed = stats[5].base_stat;
    var typesHTML = types
        .map(function (type) {
        return "<span style=\"background:".concat(typeColor[type.type.name], "\">").concat(type.type.name, "</span>");
    })
        .join('');
    // 依屬性設定背景色
    var themeColor = typeColor[types[0].type.name];
    var pokeInnerHTML = "\n  <div class=\"container\">\n  <div class='card' style= \"background: radial-gradient(circle at 50% 0%,".concat(themeColor, " 36%, #f0efe9 36%)\">\n  <span class=\"number\">").concat(id, "</span>\n  <p class='hp'><span>HP</span> ").concat(hp, "</p>\n  <img src=\"").concat(sprites.front_default, "\" alt=\"").concat(name, "\" loading=\"lazy\" />\n  <h2 class='name'>").concat(name, "</h2>\n  <div class='types'>\n    ").concat(typesHTML, "\n  </div>\n  <div class=\"stats\">\n  <div>\n  <h3>").concat(statAttack, "</h3>\n  <p>Attack</p>\n  </div>\n  <div>\n  <h3>").concat(statDefense, "</h3>\n  <p>Defense</p>\n  </div>\n  <div>\n  <h3>").concat(statSpeed, "</h3>\n  <p>Speed</p>\n  </div>\n  </div>\n  </div>\n  ");
    pokemonEl.innerHTML = pokeInnerHTML;
    loading.innerHTML = '';
    pokeContainer.appendChild(pokemonEl);
};
var fetchPokemons = function (startId, endId) { return __awaiter(void 0, void 0, void 0, function () {
    var range, i, _a, range_1, range_1_1, pokemon, e_1_1;
    var _b, e_1, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                range = [];
                for (i = startId; i <= endId; i++) {
                    range.push(getPokemon(i));
                }
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, 7, 12]);
                _a = true, range_1 = __asyncValues(range);
                _e.label = 2;
            case 2: return [4 /*yield*/, range_1.next()];
            case 3:
                if (!(range_1_1 = _e.sent(), _b = range_1_1.done, !_b)) return [3 /*break*/, 5];
                _d = range_1_1.value;
                _a = false;
                try {
                    pokemon = _d;
                    createPokemonCard(pokemon);
                }
                finally {
                    _a = true;
                }
                _e.label = 4;
            case 4: return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _e.trys.push([7, , 10, 11]);
                if (!(!_a && !_b && (_c = range_1.return))) return [3 /*break*/, 9];
                return [4 /*yield*/, _c.call(range_1)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12: return [2 /*return*/];
        }
    });
}); };
// 根據id取得各地區的pokemon資料集
navbarbuttons.addEventListener('click', function (e) {
    if (!e.target) {
        return;
    }
    var btnElement = e.target;
    btnElement.disabled = true;
    setTimeout(function () {
        btnElement.disabled = false;
    }, 1000);
    if (!btnElement.classList.contains('btn')) {
        return;
    }
    pokeContainer.innerHTML = '';
    loading.innerHTML =
        "<div class ='loading'><div class='circle'></div><div class='circle'></div><div class='circle'></div>";
    navbarbuttons.classList.remove('active');
    if (btnElement.dataset.pokenumStart && btnElement.dataset.pokenumEnd) {
        var pokenumStart = parseInt(btnElement.dataset.pokenumStart, 10);
        var pokenumEnd = parseInt(btnElement.dataset.pokenumEnd, 10);
        fetchPokemons(pokenumStart, pokenumEnd);
    }
});
// hamburger menu
toggleButton.addEventListener('click', function (e) {
    navbarbuttons.classList.toggle('active');
});
// navbar scroll
var lastScroll = 0;
window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
    }
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
