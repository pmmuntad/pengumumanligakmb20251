const participants = [
    {
      "no": "1",
      "nama": "Afifah Khairunnisa",
      "nim": "A11123096",
      "programStudi": "S1 - Pendidikan Bahasa Dan Sastra Indonesia",
      "fakultas": "FKIP"
    },
    {
      "no": "2",
      "nama": "Magvira Ayu Wisnawa",
      "nim": "A11123106",
      "programStudi": "S1 - Pendidikan Bahasa Dan Sastra Indonesia",
      "fakultas": "FKIP"
    },
    {
      "no": "3",
      "nama": "Nadia Putri Trisnaningsih",
      "nim": "A11123126",
      "programStudi": "S1 - Pendidikan Bahasa Dan Sastra Indonesia",
      "fakultas": "FKIP"
    },
    {
      "no": "4",
      "nama": "DINA YUNIAR",
      "nim": "B10122037",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "5",
      "nama": "Mujizat Tiara Kuraini Putri",
      "nim": "B10122039",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "6",
      "nama": "Muhamad iqfal",
      "nim": "B10122056",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "7",
      "nama": "FIRAYANI",
      "nim": "B10122088",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "8",
      "nama": "Elkavina Detris Kola'a",
      "nim": "B10122130",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "9",
      "nama": "NOVRY DWIYANTI",
      "nim": "B10122154",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "10",
      "nama": "USMAN",
      "nim": "B10122169",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "11",
      "nama": "ENDANG AYU RAHMAWATI",
      "nim": "B10123103",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "12",
      "nama": "Anisa Auliya",
      "nim": "B10123118",
      "programStudi": "S1 - Ilmu Administrasi Publik",
      "fakultas": "FISIP"
    },
    {
      "no": "13",
      "nama": "ERRIC YONATAN NGGOLIPU",
      "nim": "B20121098",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "14",
      "nama": "Asri Nursafria Ningsih",
      "nim": "B20121118",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "15",
      "nama": "Ikbal",
      "nim": "B20122043",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "16",
      "nama": "Elin Tamara",
      "nim": "B20122045",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "17",
      "nama": "ALDI",
      "nim": "B20122053",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "18",
      "nama": "Ulul Asnan",
      "nim": "B20122062",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "19",
      "nama": "MUH DZULKIFLI IDRIS",
      "nim": "B20122072",
      "programStudi": "S1 - Sosiologi",
      "fakultas": "FISIP"
    },
    {
      "no": "20",
      "nama": "Nurarsin putri",
      "nim": "B40123002",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "21",
      "nama": "Nurhaliza Ismet Ahaba",
      "nim": "B40123003",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "22",
      "nama": "NI'MAH. A",
      "nim": "B40123004",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "23",
      "nama": "Lilis Wahyuningsih",
      "nim": "B40123023",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "24",
      "nama": "Sulfianti",
      "nim": "B40123025",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "25",
      "nama": "Fitriana",
      "nim": "B40123026",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "26",
      "nama": "Mohammad irgi",
      "nim": "B40123032",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "27",
      "nama": "NAFILAH AMALIAH",
      "nim": "B40123082",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "28",
      "nama": "Rezky Putri Lutviani",
      "nim": "B40123101",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "29",
      "nama": "SITI HARMAYANTI",
      "nim": "B40123116",
      "programStudi": "S1 - Ilmu Pemerintahan",
      "fakultas": "FISIP"
    },
    {
      "no": "30",
      "nama": "DESI FEBRIANTI R. SALIM",
      "nim": "B50122159",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "31",
      "nama": "FATWA ALKAUTSAR",
      "nim": "B50122163",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "32",
      "nama": "PRITISINTA",
      "nim": "B50122165",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "33",
      "nama": "Indriana",
      "nim": "B50122182",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "34",
      "nama": "Dhea Indira Pramesti",
      "nim": "B50122187",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "35",
      "nama": "NUR HAYYINAH LUANDE",
      "nim": "B50122194",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "36",
      "nama": "Nur Anisa",
      "nim": "B50122203",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "37",
      "nama": "MOHAMMAD RIFALDI",
      "nim": "B50122210",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "38",
      "nama": "Graceylla Gloria Laniengka",
      "nim": "B50123025",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "39",
      "nama": "Shekinah Glory",
      "nim": "B50123031",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "40",
      "nama": "Gina tirta saputri",
      "nim": "B50123035",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "41",
      "nama": "Rabiatun Latifa",
      "nim": "B50123059",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "42",
      "nama": "Zul Tiara",
      "nim": "B50123067",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "43",
      "nama": "NAFTALIA IRENA PODENGGE",
      "nim": "B50123074",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "44",
      "nama": "LIDYA RESTIKA",
      "nim": "B50123079",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "45",
      "nama": "SRILATI",
      "nim": "B50123084",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "46",
      "nama": "Indah Sutriasih",
      "nim": "B50123093",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "47",
      "nama": "Alifa wulan fadhillah.A.pali",
      "nim": "B50123095",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "48",
      "nama": "Olivia Anastasya",
      "nim": "B50123108",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "49",
      "nama": "MAGFIRAH ATSARI AYU FADLI",
      "nim": "B50123120",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "50",
      "nama": "Siti zahra",
      "nim": "B50123133",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "51",
      "nama": "Ria Reskita",
      "nim": "B50123139",
      "programStudi": "S1 - Ilmu Komunikasi",
      "fakultas": "FISIP"
    },
    {
      "no": "52",
      "nama": "MIFTAHUL JANNAH",
      "nim": "C10122020",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "53",
      "nama": "Selfianur",
      "nim": "C10122040",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "54",
      "nama": "Reygina Chelsea Belopangan",
      "nim": "C10122050",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "55",
      "nama": "Siti Ruzila",
      "nim": "C10122059",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "56",
      "nama": "Danti Meilani Putri",
      "nim": "C10122083",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "57",
      "nama": "Gitta Nur Rahma",
      "nim": "C10122084",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "58",
      "nama": "Aulia",
      "nim": "C10122086",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "59",
      "nama": "Moh Fadel",
      "nim": "C10122088",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "60",
      "nama": "Hidayat Mandala Putra",
      "nim": "C10122092",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "61",
      "nama": "Yurista Lafare",
      "nim": "C10122093",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "62",
      "nama": "Nahda Maidina Arifin",
      "nim": "C10122102",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "63",
      "nama": "Asrit",
      "nim": "C10122112",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "64",
      "nama": "Amanda septyanti",
      "nim": "C10122143",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "65",
      "nama": "Sutarye pujangan",
      "nim": "C10122144",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "66",
      "nama": "Rahmat Fajar Hadi Saputro",
      "nim": "C10123024",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "67",
      "nama": "Ririn",
      "nim": "C10123069",
      "programStudi": "S1 - Ekonomi dan Pembangunan",
      "fakultas": "FEB"
    },
    {
      "no": "68",
      "nama": "FATMAWATI",
      "nim": "C20023001",
      "programStudi": "D3 - Manajemen Pemasaran",
      "fakultas": "FEB"
    },
    {
      "no": "69",
      "nama": "QIANU AFRIANSA",
      "nim": "C20023015",
      "programStudi": "D3 - Manajemen Pemasaran",
      "fakultas": "FEB"
    },
    {
      "no": "70",
      "nama": "Muhammad Haikhal Ali",
      "nim": "C20122072",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "71",
      "nama": "Alvin saputra",
      "nim": "C20122102",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "72",
      "nama": "Destin Naftalin kandolia",
      "nim": "C20122126",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "73",
      "nama": "Suwanda",
      "nim": "C20122134",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "74",
      "nama": "Firman Alamsyah",
      "nim": "C20122212",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "75",
      "nama": "Moh Fahri",
      "nim": "C20122288",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "76",
      "nama": "Nur Ainun",
      "nim": "C20122300",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "77",
      "nama": "Dewi kalsum",
      "nim": "C20122307",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "78",
      "nama": "Dita Yustia Nisah",
      "nim": "C20122312",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "79",
      "nama": "Novaldo Raditya Dwiputra",
      "nim": "C20123002",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "80",
      "nama": "ELZHA SELLO WINDYSARI",
      "nim": "C20123073",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "81",
      "nama": "Julita Amanda",
      "nim": "C20123091",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "82",
      "nama": "MELY ANGRAINI MELLOLO",
      "nim": "C20123144",
      "programStudi": "S1 - Manajemen",
      "fakultas": "FEB"
    },
    {
      "no": "83",
      "nama": "MAULIDIN T. SEMMA",
      "nim": "C30122115",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "84",
      "nama": "Nabila",
      "nim": "C30122121",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "85",
      "nama": "Nur Indah",
      "nim": "C30122219",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "86",
      "nama": "MIHRAJUL QARIMAH",
      "nim": "C30122239",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "87",
      "nama": "Gladys Velysa Putri Ludeng",
      "nim": "C30123007",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "88",
      "nama": "Sucyawati",
      "nim": "C30123028",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "89",
      "nama": "FATHIR",
      "nim": "C30123049",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "90",
      "nama": "Rahmad Hidayat",
      "nim": "C30123084",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "91",
      "nama": "Andi Muh. Aco",
      "nim": "C30123099",
      "programStudi": "S1 - Akuntansi",
      "fakultas": "FEB"
    },
    {
      "no": "92",
      "nama": "Agindra Sellsha Ramadhina",
      "nim": "D10121098",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "93",
      "nama": "Fausan Ahkrin",
      "nim": "D10121603",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "94",
      "nama": "Ezra Rafael Dien",
      "nim": "D10122014",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "95",
      "nama": "FADIL ALBANI HI. BADEWI",
      "nim": "D10122089",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "96",
      "nama": "Owen Sangga Langi",
      "nim": "D10122139",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "97",
      "nama": "HAFID KARUNA TRIMUDITA",
      "nim": "D10122196",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "98",
      "nama": "Reynaldi Hidayat",
      "nim": "D10122243",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "99",
      "nama": "Wanda",
      "nim": "D10122262",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "100",
      "nama": "Moh Hidayat",
      "nim": "D10122315",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "101",
      "nama": "Hakam B. Bilai",
      "nim": "D10122324",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "102",
      "nama": "Rizky Alfandi",
      "nim": "D10122325",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "103",
      "nama": "AHMAD AFANDI",
      "nim": "D10122327",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "104",
      "nama": "MOH REZALDY",
      "nim": "D10122335",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "105",
      "nama": "Syaikhul Firdaus",
      "nim": "D10122340",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "106",
      "nama": "SITTI ATIYAH MAQBULLAH LABOLO",
      "nim": "D10122403",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "107",
      "nama": "Muhammad Erlangga Dwiparwayoga",
      "nim": "D10122673",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "108",
      "nama": "MAHRUS ALI FAQIH",
      "nim": "D10122681",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "109",
      "nama": "RENDI H. TAMBUR",
      "nim": "D10122714",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "110",
      "nama": "HEISKEL HERY CRISTA BATONG",
      "nim": "D10122721",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "111",
      "nama": "Mohamad imam maulana nugroho",
      "nim": "D10122726",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "112",
      "nama": "Imel Amanda",
      "nim": "D10122739",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "113",
      "nama": "VICENT YOSAFAT JOSES TAMPOMURI",
      "nim": "D10122745",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "114",
      "nama": "Chyntia Margaretha",
      "nim": "D10123006",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "115",
      "nama": "MAISIE FALISSYA",
      "nim": "D10123143",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "116",
      "nama": "ALISHA SAADIYAH ZAHRA PALIUA",
      "nim": "D10123225",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "117",
      "nama": "Wiyanda",
      "nim": "D10123300",
      "programStudi": "D4 - Teknologi Rekayasa Instalasi Listrik",
      "fakultas": "FAKUM"
    },
    {
      "no": "118",
      "nama": "Abel Gifara",
      "nim": "D10123321",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "119",
      "nama": "Dina Oktaviana",
      "nim": "D10123379",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "120",
      "nama": "Satria Banardy A Ghazali",
      "nim": "D10123470",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "121",
      "nama": "Dea Nurhanifah Siregar",
      "nim": "D10123560",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "122",
      "nama": "FARISA AULIA",
      "nim": "D10123590",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "123",
      "nama": "Nurainun",
      "nim": "D10123598",
      "programStudi": "S1 - Ilmu Hukum",
      "fakultas": "FAKUM"
    },
    {
      "no": "124",
      "nama": "Osama Ramadhan",
      "nim": "E28121207",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "125",
      "nama": "Hasrianti",
      "nim": "E28121234",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "126",
      "nama": "Moh. Nasrullah",
      "nim": "E28122140",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "127",
      "nama": "Ahmad Fahrul",
      "nim": "E28122142",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "128",
      "nama": "Dwi Maha Putri",
      "nim": "E28122191",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "129",
      "nama": "Nurul Wahdaniyah",
      "nim": "E28122192",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "130",
      "nama": "Hasnawati",
      "nim": "E28122197",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "131",
      "nama": "Ema Widiyanti",
      "nim": "E28122203",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "132",
      "nama": "Nurlaela",
      "nim": "E28122204",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "133",
      "nama": "Azhara Khusnul Aulia",
      "nim": "E28122235",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "134",
      "nama": "Rahmat Hidayat",
      "nim": "E28122240",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "135",
      "nama": "Helmi",
      "nim": "E28122301",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "136",
      "nama": "Miftahul Imam Astrawan",
      "nim": "E28122312",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "137",
      "nama": "Arlin",
      "nim": "E28122349",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "138",
      "nama": "Nadya Nurmaidah",
      "nim": "E28122366",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "139",
      "nama": "WAYAN YUDANA",
      "nim": "E28122376",
      "programStudi": "S1 - Agroteknologi",
      "fakultas": "FAPERTA"
    },
    {
      "no": "140",
      "nama": "MARFU",
      "nim": "E32122273",
      "programStudi": "S1 - Agribisnis",
      "fakultas": "FAPERTA"
    },
    {
      "no": "141",
      "nama": "HABIL AKHIR N GANTU LEMBAH",
      "nim": "F11120075",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "142",
      "nama": "YULISTIA MAWAR LESTARI",
      "nim": "F11122002",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "143",
      "nama": "Mardiani S",
      "nim": "F11122005",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "144",
      "nama": "ALYA RANING SHALSABILA",
      "nim": "F11122044",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "145",
      "nama": "Andi Naura Salsabila",
      "nim": "F11122047",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "146",
      "nama": "NURUL KHAALISHAH",
      "nim": "F11122048",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "147",
      "nama": "Salwa Safitri",
      "nim": "F11122050",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "148",
      "nama": "ANNISA NURZIANI",
      "nim": "F11122053",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "149",
      "nama": "CHIKA SYAHALIVA",
      "nim": "F11122093",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "150",
      "nama": "MUHAMMAD IRHAM",
      "nim": "F11122096",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "151",
      "nama": "Sri Nur'Ain S.Labay",
      "nim": "F11122121",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "152",
      "nama": "LISANA SHIDQIN ALIYYA SARIKA",
      "nim": "F11122148",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "153",
      "nama": "Yudha Rizky Ilahi",
      "nim": "F11122160",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "154",
      "nama": "Rabbiatul Adawiyah",
      "nim": "F11122173",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "155",
      "nama": "MIFTA NABILA",
      "nim": "F11122180",
      "programStudi": "S1 - Teknik Sipil",
      "fakultas": "FATEK"
    },
    {
      "no": "156",
      "nama": "ISMAWATI",
      "nim": "F21021056",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "157",
      "nama": "Moh Raihan Fadhillah",
      "nim": "F21022019",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "158",
      "nama": "Brigita Putri Dua Padang",
      "nim": "F21022021",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "159",
      "nama": "FIRLI AMELIA",
      "nim": "F21022029",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "160",
      "nama": "Siti Alfera Sari",
      "nim": "F21022033",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "161",
      "nama": "Gilang Duta Tri Mulya",
      "nim": "F21022044",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "162",
      "nama": "LELI ANDINI TONGAYO",
      "nim": "F21022045",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "163",
      "nama": "Muqsitha Anggriyani",
      "nim": "F21022046",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "164",
      "nama": "NADIASTI",
      "nim": "F21022050",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "165",
      "nama": "Puteri Sweetania Javastica",
      "nim": "F21022052",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "166",
      "nama": "Novia Nuning Rahayu",
      "nim": "F21022055",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "167",
      "nama": "Dwi Melati Rezkitha",
      "nim": "F21022059",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "168",
      "nama": "AL INAYA TUL FADHILA",
      "nim": "F21022060",
      "programStudi": "D4 - Teknologi Rekayasa Konstruksi Jalan dan Jembatan",
      "fakultas": "FATEK"
    },
    {
      "no": "169",
      "nama": "Muhammad Zulfikar",
      "nim": "F23123013",
      "programStudi": "S1 - Perencanaan Wilayah dan Kota",
      "fakultas": "FATEK"
    },
    {
      "no": "170",
      "nama": "RIVALDO EMANUEL",
      "nim": "F44122013",
      "programStudi": "S1 - Teknik Elektro",
      "fakultas": "FATEK"
    },
    {
      "no": "171",
      "nama": "Melkisedek Lintong",
      "nim": "F44122033",
      "programStudi": "S1 - Teknik Elektro",
      "fakultas": "FATEK"
    },
    {
      "no": "172",
      "nama": "ANDI SAPUTRA",
      "nim": "F44122049",
      "programStudi": "S1 - Teknik Elektro",
      "fakultas": "FATEK"
    },
    {
      "no": "173",
      "nama": "Alfiyah",
      "nim": "G81122030",
      "programStudi": "S1 - Teknik Geofisika",
      "fakultas": "FMIPA"
    },
    {
      "no": "174",
      "nama": "Anggy Sapang",
      "nim": "L13121037",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "175",
      "nama": "ANSAR ABDI",
      "nim": "L13121296",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "176",
      "nama": "Enjelina Dewi Ratna sari",
      "nim": "L13122046",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "177",
      "nama": "NUR NABILA NAJA",
      "nim": "L13122052",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "178",
      "nama": "Ayu Wulandari Katte",
      "nim": "L13122123",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "179",
      "nama": "Alfira",
      "nim": "L13122143",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "180",
      "nama": "NUR ANISAH",
      "nim": "L13122166",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "181",
      "nama": "Elisabeth Maulelo",
      "nim": "L13122183",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "182",
      "nama": "Khairatunnisa",
      "nim": "L13122208",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "183",
      "nama": "SRI INDRIYANI LAGI",
      "nim": "L13122209",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "184",
      "nama": "Moh. Dwi Akmal Basyarewan",
      "nim": "L13122212",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "185",
      "nama": "Ahmad Robi Nullah",
      "nim": "L13122275",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "186",
      "nama": "Tasia Putri Pongtiku Lodan Aran",
      "nim": "L13122302",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "187",
      "nama": "Maria Delsirianti",
      "nim": "L13122315",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "188",
      "nama": "Nazwa Aulia Ananta",
      "nim": "L13122324",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "189",
      "nama": "Arum Kurniaten",
      "nim": "L13122330",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "190",
      "nama": "Mochamad Farhan Rachman Madjid Putrafatdy Uno",
      "nim": "L13122384",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "191",
      "nama": "Fikri Ramadhan",
      "nim": "L13122392",
      "programStudi": "S1 - Kehutanan",
      "fakultas": "FAHUT"
    },
    {
      "no": "192",
      "nama": "Anastasia Veronika sampeussa soande",
      "nim": "O12119202",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "193",
      "nama": "Rustam Manung",
      "nim": "O12120085",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "194",
      "nama": "IVANSYAH K LANDO",
      "nim": "O12120087",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "195",
      "nama": "Edwin Setiawan B Kadamo",
      "nim": "O12120093",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "196",
      "nama": "Yuyun Yuliawati",
      "nim": "O12122041",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "197",
      "nama": "Abdul Komat",
      "nim": "O12123060",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "198",
      "nama": "Muhammad Ery Fawzaan",
      "nim": "O12123099",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "199",
      "nama": "Moh Fauzan",
      "nim": "O12123106",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "200",
      "nama": "Hidayat Hasbi Widjaya",
      "nim": "O12123114",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "201",
      "nama": "Syahra Afra Brigita",
      "nim": "O12123136",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "202",
      "nama": "Nurul jinan",
      "nim": "O12123138",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "203",
      "nama": "Ivalen Dwi Rahayu",
      "nim": "O12123180",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "204",
      "nama": "Fira Mulia",
      "nim": "O12123216",
      "programStudi": "S1 - Peternakan",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "205",
      "nama": "Erwin Syaputra",
      "nim": "O27120040",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "206",
      "nama": "Siti Khumayrah Taher",
      "nim": "O27122001",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "207",
      "nama": "Femi abriyani",
      "nim": "O27122010",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "208",
      "nama": "Nurul Hikmah",
      "nim": "O27122021",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "209",
      "nama": "Putra Hermawan",
      "nim": "O27122030",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "210",
      "nama": "Nur Zaskia",
      "nim": "O27122053",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "211",
      "nama": "Yusril",
      "nim": "O27122062",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "212",
      "nama": "Saskia Dela Sadaang",
      "nim": "O27122064",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "213",
      "nama": "Nurul Afdila",
      "nim": "O27122065",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "214",
      "nama": "Rani Andini Putri",
      "nim": "O27122068",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "215",
      "nama": "Dinda Amalia",
      "nim": "O27122069",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "216",
      "nama": "Ulul Azmi",
      "nim": "O27122072",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "217",
      "nama": "Karmila. A. Hazali",
      "nim": "O27122074",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "218",
      "nama": "Muhammad Ihsan fahrurrozi",
      "nim": "O27122081",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "219",
      "nama": "PUTRI N SAWALI",
      "nim": "O27122087",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "220",
      "nama": "Retna Rosalinda Lidaya",
      "nim": "O27122091",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "221",
      "nama": "Sahrul Gunawan",
      "nim": "O27122095",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "222",
      "nama": "Nur Mila",
      "nim": "O27122099",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "223",
      "nama": "Hellen Juliastrid Togalami",
      "nim": "O27122104",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "224",
      "nama": "RR SITI NUR KHASANAH",
      "nim": "O27122107",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "225",
      "nama": "Eliza",
      "nim": "O27122126",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "226",
      "nama": "VRIGRIAN A.SAMAD",
      "nim": "O27122131",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "227",
      "nama": "NURDIN",
      "nim": "O27122150",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "228",
      "nama": "Zulkarnain",
      "nim": "O27122157",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "229",
      "nama": "Azril",
      "nim": "O27122159",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "230",
      "nama": "Aisa i Sahi",
      "nim": "O27122178",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "231",
      "nama": "Alfania Kartika Putri R.L",
      "nim": "O27123009",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "232",
      "nama": "Salsa bila",
      "nim": "O27123032",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "233",
      "nama": "MUH ERWATUL",
      "nim": "O27123034",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "234",
      "nama": "NADIA",
      "nim": "O27123036",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "235",
      "nama": "Aini Nasita",
      "nim": "O27123038",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "236",
      "nama": "FINA ADHAR",
      "nim": "O27123040",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "237",
      "nama": "Rendy",
      "nim": "O27123063",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "238",
      "nama": "AFRILIYA",
      "nim": "O27123073",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    },
    {
      "no": "239",
      "nama": "Hijrah Halid",
      "nim": "O27123088",
      "programStudi": "S1 - Akuakultur",
      "fakultas": "FAPETKAN"
    }

  ]