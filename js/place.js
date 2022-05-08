const storeList = [{
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-100, 37.8],
        },
        properties: {
            name: "Property 1",
            address: "Ground Floor, Strand Coffee House, PJ Ramchandani Marg, Apollo Bandar, Colaba, Mumbai, Maharashtra 400005, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-110.82815459698692, 35.94324557965778],
        },
        properties: {
            name: "Property 2",
            address: "Shop No 7, Ground Floor, Chemox House, Hospital Lane, Barrack Rd, New Marine Lines, Mumbai, Maharashtra 400020, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-90.81416419471911, 34.958588300624903],
        },
        properties: {
            name: "Property 3",
            address: "Mathew Rd, Charni Road East, Opera House, Gamdevi, Mumbai, Maharashtra 400004, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-80.82468278992283, 33.99953227821179],
        },
        properties: {
            name: "Property 4",
            address: "Unit NO. 6D, Block-17, Phoenix Mills Compound, 462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-105.87461342204949, 34.079330659542418],
        },
        properties: {
            name: "Property 5",
            address: "Shop No 2, Ground floor Kanakia Zillion, LBS Marg, Kurla West, Mumbai, Maharashtra 400070, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-107.89689714156712, 35.229326479731387],
        },
        properties: {
            name: "Property 6",
            address: "No. 1-5, Building, Shop, No. 35, Evershine Millennium Paradise, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-120.20889596191188, 39.68797557618975],
        },
        properties: {
            name: "Property 7",
            address: "Ground Floor,Shop No. A,Municipal No. 26A & 27A-UA Jawahar Nagar,Kamla Nagar, near Malka Ganj, Chowk, Delhi 110007, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-98.11585549399085, 38.741270652258336],
        },
        properties: {
            name: "Property 8",
            address: "SHOP NO. 10-11, COMMUNITY CENTRE, Garg Mall, Pocket 4, Sector 11, Rohini, New Delhi, Delhi 110020, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-92.30262307535264, 37.635858680378387],
        },
        properties: {
            name: "Property 9",
            address: "Plot No. 7,LSC, Pankaj Plaza, near Prince Apartments, I.P.Extension, Patparganj, New Delhi, Delhi 110092, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-97.27116736919079, 36.539914829877652],
        },
        properties: {
            name: "Property 10",
            address: "Plot No.16, Ground Floor, Community Center Rd, Pocket A, Okhla Phase I, Okhla Industrial Area, New Delhi, Delhi 110020, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-100.37799509128703, 35.632535906298756],
        },
        properties: {
            name: "Property 11",
            address: "Ground Floor, Shop no. 3 & 4, Dist, Chinar Park, Noapara, Sukanta Pally, Newtown, Kolkata, West Bengal 700157, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-105.35190256153795, 34.56692525562484],
        },
        properties: {
            name: "Property 12",
            address: "3A, Humayun Place Near New Empire Cinema, Esplanade, New Market Area, Dharmatala, Kolkata, West Bengal 700087, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-107.38795145132286, 34.70413303586267],
        },
        properties: {
            name: "Property 13",
            address: "Municipality, 352/1889, Dakshminayan Barasat Road Under Panhihati, Sodepur, Kolkata, West Bengal 700110, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-103.3251233867392, 33.520947492966815],
        },
        properties: {
            name: "Property 14",
            address: "Plot No. 99A, Block F, Nalini Ranjan Ave, New Alipore, Kolkata, West Bengal 700053, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-95.52382422967368, 32.080883179752515],
        },
        properties: {
            name: "Property 15",
            address: "Plot No. 50 & 51, Survey No. 301/2, 313/1, 304/2, Shop No. G - 7 & 8 Ground Floor, Opp. Gujarat High Court, S. G. Road Town Planning Scheme No. 28, Ahmedabad, Gujarat 380061, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-89.58939887680621, 35.055613560773505],
        },
        properties: {
            name: "Property 16",
            address: "Neelgagan Plaza, 1st And 2nd Floor Survey Number 2259 Commissioner Office, Dr Ambedkar Rd, Opposite Police, Jain Colony, Shahibag, Ahmedabad, Gujarat 380004, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-96.47509639777408, 30.033498752157918],
        },
        properties: {
            name: "Property 17",
            address: "A1 Amrapali Axiom, Sardar Patel Ring Rd, Ambli, Ahmedabad, Gujarat 380058, India",
            phone: "23 2323 2323",
        },
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-108.66939307985296, 40.05340224332604],
        },
        properties: {
            name: "Property 18",
            address: "Shop Number A/03 & A/04, Ground Floor, Gujarat 382350, India",
            phone: "23 2323 2323",
        },
    },
];