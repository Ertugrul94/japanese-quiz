const SENTENCES_DATA = {
  "_instructions": {
    "description": "Sentence database for Japanese vocabulary. Each entry links to a word by word_id.",
    "tense_keys": {
      "present_pos": "Present / Non-past affirmative  (〜ます / 〜です)",
      "present_neg": "Present / Non-past negative     (〜ません / 〜くないです)",
      "past_pos":    "Past affirmative                (〜ました / 〜でした)",
      "past_neg":    "Past negative                   (〜ませんでした / 〜くなかったです)"
    },
    "how_to_add": "Copy an existing block, change the word_id to match the target word in n5_words.json, then write your four sentences."
  },
  "sentences": [
    {
      "word_id": "n5_542",
      "word": "食べる",
      "sentences": {
        "present_pos": {
          "japanese": "私は毎日ご飯を食べます。",
          "romaji": "Watashi wa mainichi gohan wo tabemasu.",
          "english": "I eat rice every day."
        },
        "present_neg": {
          "japanese": "私は朝ご飯を食べません。",
          "romaji": "Watashi wa asagohan wo tabemasen.",
          "english": "I don't eat breakfast."
        },
        "past_pos": {
          "japanese": "昨日、寿司を食べました。",
          "romaji": "Kinou, sushi wo tabemashita.",
          "english": "I ate sushi yesterday."
        },
        "past_neg": {
          "japanese": "昨日は昼ご飯を食べませんでした。",
          "romaji": "Kinou wa hirugohan wo tabemasen deshita.",
          "english": "I didn't eat lunch yesterday."
        }
      }
    },
    {
      "word_id": "n5_119",
      "word": "飲む",
      "sentences": {
        "present_pos": {
          "japanese": "毎朝コーヒーを飲みます。",
          "romaji": "Maiasa koohii wo nomimasu.",
          "english": "I drink coffee every morning."
        },
        "present_neg": {
          "japanese": "お酒を飲みません。",
          "romaji": "Osake wo nomimasen.",
          "english": "I don't drink alcohol."
        },
        "past_pos": {
          "japanese": "昨日、牛乳を飲みました。",
          "romaji": "Kinou, gyuunyuu wo nomimashita.",
          "english": "I drank milk yesterday."
        },
        "past_neg": {
          "japanese": "今日は水を飲みませんでした。",
          "romaji": "Kyou wa mizu wo nomimasen deshita.",
          "english": "I didn't drink water today."
        }
      }
    },
    {
      "word_id": "n5_064",
      "word": "行く",
      "sentences": {
        "present_pos": {
          "japanese": "毎日学校に行きます。",
          "romaji": "Mainichi gakkou ni ikimasu.",
          "english": "I go to school every day."
        },
        "present_neg": {
          "japanese": "今日は学校に行きません。",
          "romaji": "Kyou wa gakkou ni ikimasen.",
          "english": "I don't go to school today."
        },
        "past_pos": {
          "japanese": "昨日、図書館に行きました。",
          "romaji": "Kinou, toshokan ni ikimashita.",
          "english": "I went to the library yesterday."
        },
        "past_neg": {
          "japanese": "先週は公園に行きませんでした。",
          "romaji": "Senshuu wa kouen ni ikimasen deshita.",
          "english": "I didn't go to the park last week."
        }
      }
    },
    {
      "word_id": "n5_095",
      "word": "来る",
      "sentences": {
        "present_pos": {
          "japanese": "友達が明日来ます。",
          "romaji": "Tomodachi ga ashita kimasu.",
          "english": "My friend will come tomorrow."
        },
        "present_neg": {
          "japanese": "田中さんは今日来ません。",
          "romaji": "Tanaka-san wa kyou kimasen.",
          "english": "Mr. Tanaka is not coming today."
        },
        "past_pos": {
          "japanese": "先生が教室に来ました。",
          "romaji": "Sensei ga kyoushitsu ni kimashita.",
          "english": "The teacher came to the classroom."
        },
        "past_neg": {
          "japanese": "彼女は昨日パーティーに来ませんでした。",
          "romaji": "Kanojo wa kinou paatii ni kimasen deshita.",
          "english": "She didn't come to the party yesterday."
        }
      }
    },
    {
      "word_id": "n5_108",
      "word": "見る",
      "sentences": {
        "present_pos": {
          "japanese": "毎晩テレビを見ます。",
          "romaji": "Maiban terebi wo mimasu.",
          "english": "I watch TV every night."
        },
        "present_neg": {
          "japanese": "今日は映画を見ません。",
          "romaji": "Kyou wa eiga wo mimasen.",
          "english": "I'm not watching a movie today."
        },
        "past_pos": {
          "japanese": "昨日、面白い映画を見ました。",
          "romaji": "Kinou, omoshiroi eiga wo mimashita.",
          "english": "I watched an interesting movie yesterday."
        },
        "past_neg": {
          "japanese": "先週はニュースを見ませんでした。",
          "romaji": "Senshuu wa nyuusu wo mimasen deshita.",
          "english": "I didn't watch the news last week."
        }
      }
    },
    {
      "word_id": "n5_080",
      "word": "書く",
      "sentences": {
        "present_pos": {
          "japanese": "毎日日記を書きます。",
          "romaji": "Mainichi nikki wo kakimasu.",
          "english": "I write a diary every day."
        },
        "present_neg": {
          "japanese": "今日は手紙を書きません。",
          "romaji": "Kyou wa tegami wo kakimasen.",
          "english": "I'm not writing a letter today."
        },
        "past_pos": {
          "japanese": "昨日、先生に手紙を書きました。",
          "romaji": "Kinou, sensei ni tegami wo kakimashita.",
          "english": "I wrote a letter to the teacher yesterday."
        },
        "past_neg": {
          "japanese": "試験に答えを書きませんでした。",
          "romaji": "Shiken ni kotae wo kakimasen deshita.",
          "english": "I didn't write an answer on the exam."
        }
      }
    },
    {
      "word_id": "n5_171",
      "word": "読む",
      "sentences": {
        "present_pos": {
          "japanese": "寝る前に本を読みます。",
          "romaji": "Neru mae ni hon wo yomimasu.",
          "english": "I read a book before sleeping."
        },
        "present_neg": {
          "japanese": "新聞を読みません。",
          "romaji": "Shinbun wo yomimasen.",
          "english": "I don't read newspapers."
        },
        "past_pos": {
          "japanese": "昨日、面白い本を読みました。",
          "romaji": "Kinou, omoshiroi hon wo yomimashita.",
          "english": "I read an interesting book yesterday."
        },
        "past_neg": {
          "japanese": "子供の時、漫画を読みませんでした。",
          "romaji": "Kodomo no toki, manga wo yomimasen deshita.",
          "english": "I didn't read manga when I was a child."
        }
      }
    },
    {
      "word_id": "n5_050",
      "word": "話す",
      "sentences": {
        "present_pos": {
          "japanese": "友達と日本語で話します。",
          "romaji": "Tomodachi to nihongo de hanashimasu.",
          "english": "I speak Japanese with my friend."
        },
        "present_neg": {
          "japanese": "英語があまり話しません。",
          "romaji": "Eigo ga amari hanashimasen.",
          "english": "I don't speak English much."
        },
        "past_pos": {
          "japanese": "先生と日本語で話しました。",
          "romaji": "Sensei to nihongo de hanashimashita.",
          "english": "I spoke Japanese with the teacher."
        },
        "past_neg": {
          "japanese": "その人と話しませんでした。",
          "romaji": "Sono hito to hanashimasen deshita.",
          "english": "I didn't speak with that person."
        }
      }
    },
    {
      "word_id": "n5_088",
      "word": "聞く",
      "sentences": {
        "present_pos": {
          "japanese": "毎日音楽を聞きます。",
          "romaji": "Mainichi ongaku wo kikimasu.",
          "english": "I listen to music every day."
        },
        "present_neg": {
          "japanese": "ラジオを聞きません。",
          "romaji": "Rajio wo kikimasen.",
          "english": "I don't listen to the radio."
        },
        "past_pos": {
          "japanese": "先生に質問を聞きました。",
          "romaji": "Sensei ni shitsumon wo kikimashita.",
          "english": "I asked the teacher a question."
        },
        "past_neg": {
          "japanese": "彼の話を聞きませんでした。",
          "romaji": "Kare no hanashi wo kikimasen deshita.",
          "english": "I didn't listen to his story."
        }
      }
    },
    {
      "word_id": "n5_079",
      "word": "買う",
      "sentences": {
        "present_pos": {
          "japanese": "スーパーで野菜を買います。",
          "romaji": "Suupaa de yasai wo kaimasu.",
          "english": "I buy vegetables at the supermarket."
        },
        "present_neg": {
          "japanese": "高い服を買いません。",
          "romaji": "Takai fuku wo kaimasen.",
          "english": "I don't buy expensive clothes."
        },
        "past_pos": {
          "japanese": "昨日、新しい本を買いました。",
          "romaji": "Kinou, atarashii hon wo kaimashita.",
          "english": "I bought a new book yesterday."
        },
        "past_neg": {
          "japanese": "先月、何も買いませんでした。",
          "romaji": "Sengetsu, nani mo kaimasen deshita.",
          "english": "I didn't buy anything last month."
        }
      }
    },
    {
      "word_id": "n5_081",
      "word": "帰る",
      "sentences": {
        "present_pos": {
          "japanese": "六時に家に帰ります。",
          "romaji": "Rokuji ni ie ni kaerimasu.",
          "english": "I return home at six o'clock."
        },
        "present_neg": {
          "japanese": "今日は早く帰りません。",
          "romaji": "Kyou wa hayaku kaerimasen.",
          "english": "I'm not going home early today."
        },
        "past_pos": {
          "japanese": "昨日、早く家に帰りました。",
          "romaji": "Kinou, hayaku ie ni kaerimashita.",
          "english": "I returned home early yesterday."
        },
        "past_neg": {
          "japanese": "先週の金曜日は帰りませんでした。",
          "romaji": "Senshuu no kin'youbi wa kaerimasen deshita.",
          "english": "I didn't go home last Friday."
        }
      }
    },
    {
      "word_id": "n5_127",
      "word": "起きる",
      "sentences": {
        "present_pos": {
          "japanese": "毎朝七時に起きます。",
          "romaji": "Maiasa shichiji ni okimasu.",
          "english": "I wake up at seven every morning."
        },
        "present_neg": {
          "japanese": "休みの日は早く起きません。",
          "romaji": "Yasumi no hi wa hayaku okimasen.",
          "english": "I don't wake up early on days off."
        },
        "past_pos": {
          "japanese": "今朝、六時に起きました。",
          "romaji": "Kesa, rokuji ni okimashita.",
          "english": "I woke up at six this morning."
        },
        "past_neg": {
          "japanese": "昨日は遅くまで起きませんでした。",
          "romaji": "Kinou wa osoku made okimasen deshita.",
          "english": "I didn't stay up late yesterday."
        }
      }
    },
    {
      "word_id": "n5_015",
      "word": "歩く",
      "sentences": {
        "present_pos": {
          "japanese": "毎日公園を歩きます。",
          "romaji": "Mainichi kouen wo arukimasu.",
          "english": "I walk in the park every day."
        },
        "present_neg": {
          "japanese": "雨の日は歩きません。",
          "romaji": "Ame no hi wa arukimasen.",
          "english": "I don't walk on rainy days."
        },
        "past_pos": {
          "japanese": "昨日、駅まで歩きました。",
          "romaji": "Kinou, eki made arukimashita.",
          "english": "I walked to the station yesterday."
        },
        "past_neg": {
          "japanese": "昨日は遠くて歩きませんでした。",
          "romaji": "Kinou wa tookute arukimasen deshita.",
          "english": "I didn't walk because it was far yesterday."
        }
      }
    },
    {
      "word_id": "n5_141",
      "word": "住む",
      "sentences": {
        "present_pos": {
          "japanese": "東京に住んでいます。",
          "romaji": "Toukyou ni sunde imasu.",
          "english": "I live in Tokyo."
        },
        "present_neg": {
          "japanese": "大阪には住んでいません。",
          "romaji": "Oosaka ni wa sunde imasen.",
          "english": "I don't live in Osaka."
        },
        "past_pos": {
          "japanese": "子供の頃、田舎に住んでいました。",
          "romaji": "Kodomo no koro, inaka ni sunde imashita.",
          "english": "I lived in the countryside when I was a child."
        },
        "past_neg": {
          "japanese": "以前はアパートに住んでいませんでした。",
          "romaji": "Izen wa apaato ni sunde imasen deshita.",
          "english": "I didn't live in an apartment before."
        }
      }
    },
    {
      "word_id": "n5_159",
      "word": "使う",
      "sentences": {
        "present_pos": {
          "japanese": "毎日パソコンを使います。",
          "romaji": "Mainichi pasokon wo tsukaimasu.",
          "english": "I use a computer every day."
        },
        "present_neg": {
          "japanese": "この辞書を使いません。",
          "romaji": "Kono jisho wo tsukaimasen.",
          "english": "I don't use this dictionary."
        },
        "past_pos": {
          "japanese": "昨日、電子レンジを使いました。",
          "romaji": "Kinou, denshi renji wo tsukaimashita.",
          "english": "I used the microwave yesterday."
        },
        "past_neg": {
          "japanese": "昨日はスマホを使いませんでした。",
          "romaji": "Kinou wa sumaho wo tsukaimasen deshita.",
          "english": "I didn't use my smartphone yesterday."
        }
      }
    },
    {
      "word_id": "n5_160",
      "word": "作る",
      "sentences": {
        "present_pos": {
          "japanese": "毎週末、料理を作ります。",
          "romaji": "Maishuuryoku, ryouri wo tsukurimasu.",
          "english": "I cook every weekend."
        },
        "present_neg": {
          "japanese": "お菓子を作りません。",
          "romaji": "Okashi wo tsukurimasen.",
          "english": "I don't make sweets."
        },
        "past_pos": {
          "japanese": "昨日、カレーを作りました。",
          "romaji": "Kinou, karee wo tsukurimashita.",
          "english": "I made curry yesterday."
        },
        "past_neg": {
          "japanese": "先週は弁当を作りませんでした。",
          "romaji": "Senshuu wa bentou wo tsukurimasen deshita.",
          "english": "I didn't make a lunch box last week."
        }
      }
    },
    {
      "word_id": "n5_167",
      "word": "分かる",
      "sentences": {
        "present_pos": {
          "japanese": "この問題の答えが分かります。",
          "romaji": "Kono mondai no kotae ga wakarimasu.",
          "english": "I understand the answer to this problem."
        },
        "present_neg": {
          "japanese": "この漢字の読み方が分かりません。",
          "romaji": "Kono kanji no yomikata ga wakarimasen.",
          "english": "I don't know how to read this kanji."
        },
        "past_pos": {
          "japanese": "先生の説明がよく分かりました。",
          "romaji": "Sensei no setsumei ga yoku wakarimashita.",
          "english": "I understood the teacher's explanation well."
        },
        "past_neg": {
          "japanese": "その映画の意味が分かりませんでした。",
          "romaji": "Sono eiga no imi ga wakarimasen deshita.",
          "english": "I didn't understand the meaning of that movie."
        }
      }
    },
    {
      "word_id": "n5_142",
      "word": "する",
      "sentences": {
        "present_pos": {
          "japanese": "毎日運動をします。",
          "romaji": "Mainichi undou wo shimasu.",
          "english": "I exercise every day."
        },
        "present_neg": {
          "japanese": "週末は仕事をしません。",
          "romaji": "Shuumatsu wa shigoto wo shimasen.",
          "english": "I don't work on weekends."
        },
        "past_pos": {
          "japanese": "昨日、掃除をしました。",
          "romaji": "Kinou, souji wo shimashita.",
          "english": "I cleaned the house yesterday."
        },
        "past_neg": {
          "japanese": "先週は宿題をしませんでした。",
          "romaji": "Senshuu wa shukudai wo shimasen deshita.",
          "english": "I didn't do homework last week."
        }
      }
    },
    {
      "word_id": "n5_131",
      "word": "泳ぐ",
      "sentences": {
        "present_pos": {
          "japanese": "夏はプールで泳ぎます。",
          "romaji": "Natsu wa puuru de oyogimasu.",
          "english": "I swim in the pool in summer."
        },
        "present_neg": {
          "japanese": "冬は海で泳ぎません。",
          "romaji": "Fuyu wa umi de oyogimasen.",
          "english": "I don't swim in the sea in winter."
        },
        "past_pos": {
          "japanese": "昨日、プールで泳ぎました。",
          "romaji": "Kinou, puuru de oyogimashita.",
          "english": "I swam in the pool yesterday."
        },
        "past_neg": {
          "japanese": "子供の頃、泳ぎませんでした。",
          "romaji": "Kodomo no koro, oyogimasen deshita.",
          "english": "I didn't swim when I was a child."
        }
      }
    },
    {
      "word_id": "n5_106",
      "word": "待つ",
      "sentences": {
        "present_pos": {
          "japanese": "バス停でバスを待ちます。",
          "romaji": "Basutei de basu wo machimasu.",
          "english": "I wait for the bus at the bus stop."
        },
        "present_neg": {
          "japanese": "長い時間は待ちません。",
          "romaji": "Nagai jikan wa machimasen.",
          "english": "I don't wait for a long time."
        },
        "past_pos": {
          "japanese": "三十分友達を待ちました。",
          "romaji": "Sanjuppun tomodachi wo machimashita.",
          "english": "I waited for my friend for 30 minutes."
        },
        "past_neg": {
          "japanese": "昨日は誰も待ちませんでした。",
          "romaji": "Kinou wa dare mo machimasen deshita.",
          "english": "I didn't wait for anyone yesterday."
        }
      }
    },
    {
      "word_id": "n5_147",
      "word": "高い",
      "sentences": {
        "present_pos": {
          "japanese": "この店の料理は高いです。",
          "romaji": "Kono mise no ryouri wa takai desu.",
          "english": "The food at this restaurant is expensive."
        },
        "present_neg": {
          "japanese": "このスーパーはあまり高くないです。",
          "romaji": "Kono suupaa wa amari takakunai desu.",
          "english": "This supermarket is not that expensive."
        },
        "past_pos": {
          "japanese": "昨日買ったコートは高かったです。",
          "romaji": "Kinou katta kooto wa takakatta desu.",
          "english": "The coat I bought yesterday was expensive."
        },
        "past_neg": {
          "japanese": "このレストランは以前高くなかったです。",
          "romaji": "Kono resutoran wa izen takakunakatta desu.",
          "english": "This restaurant wasn't expensive before."
        }
      }
    },
    {
      "word_id": "n5_023",
      "word": "新しい",
      "sentences": {
        "present_pos": {
          "japanese": "私の携帯電話は新しいです。",
          "romaji": "Watashi no keitai denwa wa atarashii desu.",
          "english": "My mobile phone is new."
        },
        "present_neg": {
          "japanese": "この建物はあまり新しくないです。",
          "romaji": "Kono tatemono wa amari atarashikunai desu.",
          "english": "This building is not very new."
        },
        "past_pos": {
          "japanese": "去年、新しい車を買いました。",
          "romaji": "Kyonen, atarashii kuruma wo kaimashita.",
          "english": "I bought a new car last year."
        },
        "past_neg": {
          "japanese": "その店のメニューは新しくなかったです。",
          "romaji": "Sono mise no menyuu wa atarashikunakatta desu.",
          "english": "The menu at that shop wasn't new."
        }
      }
    },
    {
      "word_id": "n5_121",
      "word": "大きい",
      "sentences": {
        "present_pos": {
          "japanese": "あの山はとても大きいです。",
          "romaji": "Ano yama wa totemo ookii desu.",
          "english": "That mountain is very big."
        },
        "present_neg": {
          "japanese": "私の部屋はあまり大きくないです。",
          "romaji": "Watashi no heya wa amari ookikunai desu.",
          "english": "My room is not very big."
        },
        "past_pos": {
          "japanese": "子供の頃、あの木は大きかったです。",
          "romaji": "Kodomo no koro, ano ki wa ookikatta desu.",
          "english": "When I was a child, that tree was big."
        },
        "past_neg": {
          "japanese": "昔、この街はそれほど大きくなかったです。",
          "romaji": "Mukashi, kono machi wa sorehodo ookikunakatta desu.",
          "english": "In the past, this city wasn't that big."
        }
      }
    },
    {
      "word_id": "n5_114",
      "word": "難しい",
      "sentences": {
        "present_pos": {
          "japanese": "この試験はとても難しいです。",
          "romaji": "Kono shiken wa totemo muzukashii desu.",
          "english": "This exam is very difficult."
        },
        "present_neg": {
          "japanese": "この本はあまり難しくないです。",
          "romaji": "Kono hon wa amari muzukashikunai desu.",
          "english": "This book is not very difficult."
        },
        "past_pos": {
          "japanese": "昨日の宿題は難しかったです。",
          "romaji": "Kinou no shukudai wa muzukashikatta desu.",
          "english": "Yesterday's homework was difficult."
        },
        "past_neg": {
          "japanese": "最初は日本語は難しくなかったです。",
          "romaji": "Saisho wa nihongo wa muzukashikunakatta desu.",
          "english": "At first, Japanese wasn't difficult."
        }
      }
    },
    {
      "word_id": "n5_043",
      "word": "元気",
      "sentences": {
        "present_pos": {
          "japanese": "今日は元気です。",
          "romaji": "Kyou wa genki desu.",
          "english": "I am fine today."
        },
        "present_neg": {
          "japanese": "今日は少し元気じゃないです。",
          "romaji": "Kyou wa sukoshi genki ja nai desu.",
          "english": "I'm not feeling very well today."
        },
        "past_pos": {
          "japanese": "昨日、とても元気でした。",
          "romaji": "Kinou, totemo genki deshita.",
          "english": "I was very energetic yesterday."
        },
        "past_neg": {
          "japanese": "先週は風邪で元気じゃなかったです。",
          "romaji": "Senshuu wa kaze de genki ja nakatta desu.",
          "english": "I wasn't well last week because of a cold."
        }
      }
    },
    {
      "word_id": "n5_138",
      "word": "静か",
      "sentences": {
        "present_pos": {
          "japanese": "この図書館はとても静かです。",
          "romaji": "Kono toshokan wa totemo shizuka desu.",
          "english": "This library is very quiet."
        },
        "present_neg": {
          "japanese": "夜の街は静かじゃないです。",
          "romaji": "Yoru no machi wa shizuka ja nai desu.",
          "english": "The city at night is not quiet."
        },
        "past_pos": {
          "japanese": "昨日の授業はとても静かでした。",
          "romaji": "Kinou no jugyou wa totemo shizuka deshita.",
          "english": "Yesterday's class was very quiet."
        },
        "past_neg": {
          "japanese": "子供の頃、この村は静かじゃなかったです。",
          "romaji": "Kodomo no koro, kono mura wa shizuka ja nakatta desu.",
          "english": "When I was a child, this village wasn't quiet."
        }
      }
    },
    {
      "word_id": "n5_140",
      "word": "好き",
      "sentences": {
        "present_pos": {
          "japanese": "私は猫が好きです。",
          "romaji": "Watashi wa neko ga suki desu.",
          "english": "I like cats."
        },
        "present_neg": {
          "japanese": "辛い食べ物が好きじゃないです。",
          "romaji": "Karai tabemono ga suki ja nai desu.",
          "english": "I don't like spicy food."
        },
        "past_pos": {
          "japanese": "子供の頃、アニメが好きでした。",
          "romaji": "Kodomo no koro, anime ga suki deshita.",
          "english": "When I was a child, I liked anime."
        },
        "past_neg": {
          "japanese": "昔は野菜が好きじゃなかったです。",
          "romaji": "Mukashi wa yasai ga suki ja nakatta desu.",
          "english": "In the past, I didn't like vegetables."
        }
      }
    },
    {
      "word_id": "n5_148",
      "word": "楽しい",
      "sentences": {
        "present_pos": {
          "japanese": "日本語の勉強は楽しいです。",
          "romaji": "Nihongo no benkyou wa tanoshii desu.",
          "english": "Studying Japanese is fun."
        },
        "present_neg": {
          "japanese": "一人での旅行はあまり楽しくないです。",
          "romaji": "Hitori de no ryokou wa amari tanoshikunai desu.",
          "english": "Travelling alone is not very fun."
        },
        "past_pos": {
          "japanese": "昨日のパーティーはとても楽しかったです。",
          "romaji": "Kinou no paatii wa totemo tanoshikatta desu.",
          "english": "Yesterday's party was very fun."
        },
        "past_neg": {
          "japanese": "その授業はあまり楽しくなかったです。",
          "romaji": "Sono jugyou wa amari tanoshikunakatta desu.",
          "english": "That class wasn't very fun."
        }
      }
    },
    {
      "word_id": "n5_041",
      "word": "学校",
      "sentences": {
        "present_pos": {
          "japanese": "私の学校は駅の近くにあります。",
          "romaji": "Watashi no gakkou wa eki no chikaku ni arimasu.",
          "english": "My school is near the station."
        },
        "present_neg": {
          "japanese": "土曜日は学校がありません。",
          "romaji": "Doyoubi wa gakkou ga arimasen.",
          "english": "There is no school on Saturdays."
        },
        "past_pos": {
          "japanese": "昨日、学校で友達に会いました。",
          "romaji": "Kinou, gakkou de tomodachi ni aimashita.",
          "english": "I met a friend at school yesterday."
        },
        "past_neg": {
          "japanese": "先週、学校に行きませんでした。",
          "romaji": "Senshuu, gakkou ni ikimasen deshita.",
          "english": "I didn't go to school last week."
        }
      }
    },
    {
      "word_id": "n5_155",
      "word": "友達",
      "sentences": {
        "present_pos": {
          "japanese": "私には親友がいます。",
          "romaji": "Watashi ni wa shin'yuu ga imasu.",
          "english": "I have a close friend."
        },
        "present_neg": {
          "japanese": "この町には友達がいません。",
          "romaji": "Kono machi ni wa tomodachi ga imasen.",
          "english": "I don't have friends in this town."
        },
        "past_pos": {
          "japanese": "昨日、友達と映画を見ました。",
          "romaji": "Kinou, tomodachi to eiga wo mimashita.",
          "english": "I watched a movie with my friend yesterday."
        },
        "past_neg": {
          "japanese": "子供の頃はあまり友達がいませんでした。",
          "romaji": "Kodomo no koro wa amari tomodachi ga imasen deshita.",
          "english": "I didn't have many friends when I was a child."
        }
      }
    },
    {
      "word_id": "n5_032",
      "word": "電車",
      "sentences": {
        "present_pos": {
          "japanese": "毎日電車で会社に行きます。",
          "romaji": "Mainichi densha de kaisha ni ikimasu.",
          "english": "I go to the office by train every day."
        },
        "present_neg": {
          "japanese": "休みの日は電車に乗りません。",
          "romaji": "Yasumi no hi wa densha ni norimasen.",
          "english": "I don't take the train on days off."
        },
        "past_pos": {
          "japanese": "昨日、電車で東京に行きました。",
          "romaji": "Kinou, densha de Toukyou ni ikimashita.",
          "english": "I went to Tokyo by train yesterday."
        },
        "past_neg": {
          "japanese": "先週は電車に乗りませんでした。",
          "romaji": "Senshuu wa densha ni norimasen deshita.",
          "english": "I didn't ride the train last week."
        }
      }
    },
    {
      "word_id": "n5_109",
      "word": "水",
      "sentences": {
        "present_pos": {
          "japanese": "毎日水を飲みます。",
          "romaji": "Mainichi mizu wo nomimasu.",
          "english": "I drink water every day."
        },
        "present_neg": {
          "japanese": "冷たい水は飲みません。",
          "romaji": "Tsumetai mizu wa nomimasen.",
          "english": "I don't drink cold water."
        },
        "past_pos": {
          "japanese": "運動の後、水を飲みました。",
          "romaji": "Undou no ato, mizu wo nomimashita.",
          "english": "I drank water after exercising."
        },
        "past_neg": {
          "japanese": "昨日はあまり水を飲みませんでした。",
          "romaji": "Kinou wa amari mizu wo nomimasen deshita.",
          "english": "I didn't drink much water yesterday."
        }
      }
    },
    {
      "word_id": "n5_060",
      "word": "本",
      "sentences": {
        "present_pos": {
          "japanese": "図書館にたくさん本があります。",
          "romaji": "Toshokan ni takusan hon ga arimasu.",
          "english": "There are many books in the library."
        },
        "present_neg": {
          "japanese": "私の部屋には本がありません。",
          "romaji": "Watashi no heya ni wa hon ga arimasen.",
          "english": "There are no books in my room."
        },
        "past_pos": {
          "japanese": "昨日、本屋で本を買いました。",
          "romaji": "Kinou, hon'ya de hon wo kaimashita.",
          "english": "I bought a book at the bookstore yesterday."
        },
        "past_neg": {
          "japanese": "先週は本を読みませんでした。",
          "romaji": "Senshuu wa hon wo yomimasen deshita.",
          "english": "I didn't read a book last week."
        }
      }
    },
    {
      "word_id": "n5_164",
      "word": "猫",
      "sentences": {
        "present_pos": {
          "japanese": "私は猫を飼っています。",
          "romaji": "Watashi wa neko wo katte imasu.",
          "english": "I have a cat."
        },
        "present_neg": {
          "japanese": "姉は猫が好きじゃないです。",
          "romaji": "Ane wa neko ga suki ja nai desu.",
          "english": "My older sister doesn't like cats."
        },
        "past_pos": {
          "japanese": "子供の頃、猫がいました。",
          "romaji": "Kodomo no koro, neko ga imashita.",
          "english": "When I was a child, I had a cat."
        },
        "past_neg": {
          "japanese": "昔、この家には猫がいませんでした。",
          "romaji": "Mukashi, kono ie ni wa neko ga imasen deshita.",
          "english": "In the past, there was no cat in this house."
        }
      }
    }
  ]
}
;