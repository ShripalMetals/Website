import PipesImg from "../../assets/images/products/pipes.png";
import Welded from "../../assets/images/products/pipes/welded.png";
import Seamless from "../../assets/images/products/pipes/seamless.png";
import Fabricated from "../../assets/images/products/pipes/fabricated.png";
import ButtWelded from "../../assets/images/products/pipe-fittings/butt-welded.png";
import Threaded from "../../assets/images/products/pipe-fittings/threaded.png";
import SocketWelded from "../../assets/images/products/pipe-fittings/socket-welded.png";
import BlindFlanges from "../../assets/images/products/flanges/blind-flanges.jpg";
import SlipFlanges from "../../assets/images/products/flanges/slip-flanges.jpg";
import FlatFlanges from "../../assets/images/products/flanges/flat-flanges.jpg";
import HighFlanges from "../../assets/images/products/flanges/high-flanges.jpg";
import Bs4504Flanges from "../../assets/images/products/flanges/bs4504-flanges.jpg";
import WeldoFlanges from "../../assets/images/products/flanges/weldo-flanges.jpg";
import WeldFlanges from "../../assets/images/products/flanges/weld-flanges.jpg";
import TGFlanges from "../../assets/images/products/flanges/tongue-groove-flanges.jpg";
import ThreadedFlanges from "../../assets/images/products/flanges/threaded-flanges.jpg";
import SquareFlanges from "../../assets/images/products/flanges/square-flanges.jpg";
import SpectacleFlanges from "../../assets/images/products/flanges/spectacle-flanges.jpg";
import SpadesFlanges from "../../assets/images/products/flanges/spades-flanges.jpg";
import SocketFlanges from "../../assets/images/products/flanges/socket-flanges.jpg";
import RTJFlanges from "../../assets/images/products/flanges/rtj-flanges.jpg";
import ReducingFlanges from "../../assets/images/products/flanges/reducing-flanges.jpg";
import OrificeFlanges from "../../assets/images/products/flanges/orifice-flanges.jpg";
import LapJointFlanges from "../../assets/images/products/flanges/lap-joint-flanges.jpg";
import ForgedFlanges from "../../assets/images/products/flanges/forged-flanges.jpg";
import Bolts from "../../assets/images/products/fasteners/bolts.jpg";
import Nuts from "../../assets/images/products/fasteners/nuts.jpg";
import Screws from "../../assets/images/products/fasteners/screws.jpg";
import Washers from "../../assets/images/products/fasteners/washers.jpg";
import Anchors from "../../assets/images/products/fasteners/anchors.jpg";
import Rivets from "../../assets/images/products/fasteners/rivets.jpg";
import Pins from "../../assets/images/products/fasteners/pins.jpg";
import ClipsClamps from "../../assets/images/products/fasteners/clips-clamps-fasteners.jpg";
import SpecialtyFasteners from "../../assets/images/products/fasteners/speciality-fasteners.jpg";
import AdhesiveFasteners from "../../assets/images/products/fasteners/adhesive-fasteners.jpg";


export const productsData = {
  products: [
    {
      id: 1,
      name: "Pipes",
      param: "pipes",
      description:
        "We provide a diverse selection of pipes to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: Welded },
        { id: 2, name: "Seamless", image: Seamless },
        { id: 3, name: "Fabricated", image: Fabricated },
      ],
      grades: [
        {
          id: 1,
          name: "Stainless Steel Pipe",
          grades: [
            "Stainless Steel 304 Pipe",
            "Stainless Steel 304L Pipe",
            "Stainless Steel 316 Pipe",
            "Stainless Steel 316L Pipe",
            "316h Stainless Steel Pipe",
            "Stainless Steel 3105 Pipe",
            "Stainless Steel 317L Pipe",
            "Stainless Steel 321 Pipe",
            "Stainless Steel 347H Pipe",
            "Stainless Steel 410 Pipe",
            "Stainless Steel 445 Pipe",
            "Stainless Steel 904L Pipe",
            "JIS G3459 Stainless Steel Pipes",
            "Alloy 31 Pipe",
            "Stainless Steel Square Pipe",
            "Am 350 Stainless Steel",
          ],
        },
        {
          id: 2,
          name: "Alloy Steel Pipe",
          grades: [
            "ASTM A335 P1",
            "ASTM A335 P5",
            "ASTM A335 P9",
            "ASTM A335 P11",
            "ASTM A335 P12",
            "ASTM A335 P22",
            "ASTM A335 P91",
            "ASTM A691 Pipe",
            "16Mo3 Pipe",
            "ASTM A334 GR 6",
            "Chromoly Pipe",
            "12Cr1MoV Pipe",
          ],
        },
        {
          id: 3,
          name: "Carbon Steel Pipe",
          grades: [
            "ASTM A53 Grade B Pipe",
            "ASTM A106 Grade B",
            "ASTM A106 Grade C",
            "ASTM A333 Grade 6",
            "ASTM A333 Grade 1",
            "ASTM A671 CC60",
            "ASTM A671 CC85",
            "ASTM A672 Pipe",
            "ASTM A672 Gr B60",
            "ASTM A672 C65",
            "ASTM A672 C70",
            "Q195 Steel Pipe",
            "S275JR Pipe",
            "ASTM A519 Grade 4130",
            "ASTM A519 Grade 4140",
            "ASTM A519 Grade 1026",
            "ASTM A519 Grade 1018",
            "ASTM A210 Grade A1",
            "ASTM A120 Black Steel Pipe",
            "ASTM A334 GR.1",
          ],
        },
        {
          id: 4,
          name: "Nickel Alloy Pipe",
          grades: [
            "Nickel 200 Pipe",
            "Nickel 201 Pipe",
            "Inconel Pipe",
            "Inconel 600 Pipe",
            "Inconel 625 Pipe",
            "Inconel 800 Pipe",
            "Inconel 825 Pipe",
            "Hastelloy Pipe",
            "Hastelloy C276 Pipe",
            "Hastelloy C22 Pipe",
            "Monel Pipe",
            "Monel 400 Pipe",
            "Monel K500 Pipe",
          ],
        },
        {
          id: 5,
          name: "Duplex/SMO Pipe",
          grades: [
            "Duplex 2205 Pipe",
            "Super Duplex Pipe",
            "ASTM A790 UNS S31803",
            "ASTM A790 UNS S32205",
            "ASTM A790 UNS S32750",
            "ASTM A790 UNS S32760",
            "UNS S32950 Pipe",
            "250 SMO Pipe", 
          ],
        },
        {
          id: 6,
          name: "API 5L Pipe",
          grades: [
            "API 5L Grade B Pipe",
            "API 5L X42 Pipe",
            "API 5L X46 Pipe",
            "API 5L X52 Pipe",
            "API 5L X56 Pipe",
            "API 5L X60 Pipe",
            "API 5L X65 Pipe",
            "API 5L X70 Pipe",
            "API 5L X80 Pipe",
          ],
        },
        {
          id: 7,
          name: "Coated Steel Pipe",
          grades: [
            "Epoxy Coated Steel Pipe",
            "3LPE Coated Pipe",
            "Powder Coated Carbon Steel Pipe",
            "Cement Lined Steel Pipe",
            "PE Coated Steel Pipe",
            "PTFE Lined Pipe",
            "Bare Steel",
            "Black Pipe",
            "Galvanized Pipe",
            "3LPP Coating",
            "S275JR Pipe",
            "EN 10210 S355J2H",
            "Corten Steel Pipe",
          ],
        },
        {
          id: 8,
          name: "Titanium Pipe",
          grades: [
            "Titanium Pipe",
            "Titanium Grade 2 Pipe",
            "Grade 5 Titanium Pipe",
          ],
        },
        {
          id: 9,
          name: "Copper/Brass Pipe",
          grades: [
            "Copper Nickel Pipe",
            "Copper Nickel 90/10 Pipe",
            "Copper Nickel 70/30 Pipe",
            "Copper Pipe",
            "Brass Pipe",
          ],
        },
        {
          id: 10,
          name: "Aluminium Pipe",
          grades: [
            "Aluminum Pipe",
            "6061 Aluminum Pipe",
            "5086 Aluminum Pipe",
            "5052 Aluminum Pipe",
            "6063 Aluminum Pipe",
            "5083 Aluminum Pipe",
            "7075 Aluminum Pipe",
          ],
        },
        {
          id: 11,
          name: "Other Pipe",
          grades: [
            "Alloy 20 Pipe",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Pipe Fittings",
      param: "pipe-fittings",
      description:
        "Our extensive range of pipe fittings is meticulously designed to ensure the connection and direction of fluid or gas flow within piping systems. Our selection includes essential components such as elbows, tees, reducers, and valves, each crafted for optimal performance and reliability. Whether for complex industrial projects or simple plumbing tasks, our fittings provide crucial support, ensuring your systems operate smoothly and efficiently.",
      types: [
        { id: 1, name: "Butt Welded", image: ButtWelded },
        { id: 2, name: "Threaded", image: Threaded },
        { id: 3, name: "Socket Welded", image: SocketWelded },
      ],
      grades: [
        {
          id: 1,
          name: "Nickel Alloy P.F.",
          grades: [
            "Nickel Alloy",
            "Incolenel 600",
            "Incolenel 625",
            "Incolenel 800",
            "Incolenel 825",
            "Hastealloy C22",
            "Hastealloy C276",
            "Monel 400",
          ],
        },
        {
          id: 2,
          name: "Stainless Steel P.F.",
          grades: [
            "Stainless Steel 304",
            "Stainless Steel 304L",
            "Stainless Steel 316",
            "Stainless Steel 316L",
            "Stainless Steel 310",
            "Stainless Steel 317L",
            "Stainless Steel 321",
            "Stainless Steel 347",
            "Stainless Steel 904L",
            "Stainless Steel Forged",
          ],
        },
        {
          id: 3,
          name: "Carbon Steel P.F.",
          grades: [
            "ASTM A234 Gr WPB",
            "ASTM A420 Grade WPL6",
            "Carbon Steel Forged",
            "ASTM A105 Forged",
          ],
        },
        {
          id: 4,
          name: "Other P.F.",
          grades: [
            "Alloy Steel",
            "Nickel Alloy",
            "Copper Nickel",
            "Duplex Steel",
            "Super Duplex",
            "Titanium",
            "Brass",
            "Alloy 20",
            "NO",
            "DIN 2609 Carbon Steel Elbow",
            "Pipe Outlet",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Fasteners",
      param: "fasteners",
      description:
        "Fasteners are hardware devices used to mechanically join two or more objects together. We offer essential fastening items like bolts, nuts, screws, and rivets, crucial for securely fastening diverse objects. These components ensure reliable connections across construction, manufacturing, and automotive industries, among others. Our fasteners combine engineering with durability, ensuring they meet rigorous safety standards and provide solutions for various assembly requirements.",
      types: [
        { id: 1, name: "Bolts", image: Bolts },
        { id: 2, name: "Nuts", image: Nuts },
        { id: 3, name: "Screws", image: Screws },
        { id: 4, name: "Washers", image: Washers },
        { id: 5, name: "Rivets", image: Rivets },
        { id: 6, name: "Pins", image: Pins },
        { id: 7, name: "Anchors", image: Anchors },
        { id: 8, name: "Clips and Clamps", image: ClipsClamps },
        { id: 9, name: "Specialty Fasteners", image: SpecialtyFasteners },
        // { id: 10, name: "Adhesive Fasteners", image: AdhesiveFasteners },
      ],
      grades: [
        {
          id: 1,
          name: "Stainless Steel Fasteners",
          grades: [
            "Stainless Steel 304 Fasteners",
            "Stainless Steel 304L Fasteners",
            "Stainless Steel 316 Bolts",
            "Stainless Steel 316L Fasteners",
            "Stainless Steel 321 Fasteners",
            "310 Stainless Steel Fasteners",
            "Duplex Bolts",
            "Super Duplex Bolts",
            "Stud Bolts",
          ],
        },
        {
          id: 2,
          name: "Nickel Alloy Fasteners",
          grades: [
            "Nickel Alloy fasteners",
            "Inconel 625 fasteners",
            "Incoloy 800 fasteners",
            "Incoloy 825 fasteners",
            "Inconel 718 Bolts",
            "Hastelloy C22 fasteners",
            "Hastelloy C276 fasteners",
            "Monel 400 fasteners",
          ],
        },
        {
          id: 3,
          name: "Other Steel Fasteners",
          grades: [
            "Copper Nickel Fasteners",
            "Titanium Fasteners",
            "Grade 2 Titanium Fasteners",
            "Titanium Grade 5 Fasteners",
            "ASTM A193 Grade B7 Bolts",
            "ASTM A194 Grade 2H",
            "ASTM A193 Grade B16 Bolts",
            "Alloy 20 Fasteners",
            "ASTM A453 grade 660 Bolts",
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Flanges",
      param: "flanges",
      description:
        "Flanges play a critical role in connecting components in our product lineup, essential for securely joining pipes, valves, and equipment to maintain a tight seal within piping systems. Our flanges are crafted with precision and durability, meeting stringent standards to ensure long-term performance and safety. Their versatile designs accommodate a wide range of applications, offering solutions for both standard and specialized piping requirements.",
      types: [
        { id: 1, name: "Blind Flanges", image: BlindFlanges },
        { id: 2, name: "Slip on Flanges", image: SlipFlanges }, 
        { id: 3, name: "Flat Face Flanges", image: FlatFlanges },
        { id: 4, name: "High Hub Blind Flanges", image: HighFlanges },
        { id: 5, name: "BS 4504 Flanges", image: Bs4504Flanges },
        { id: 6, name: "Weldo Flanges", image: WeldoFlanges },
        { id: 7, name: "Weld Neck Flanges", image: WeldFlanges },
        { id: 8, name: "Tongue and Groove Flanges", image: TGFlanges },
        { id: 9, name: "Threaded Flanges", image: ThreadedFlanges },
        { id: 10, name: "Square Flanges", image: SquareFlanges },
        { id: 11, name: "Spectacle Blind Flanges", image: SpectacleFlanges },
        { id: 12, name: "Spades & Ring Spacers Flanges", image: SpadesFlanges },
        { id: 13, name: "Socket Weld Flanges", image: SocketFlanges },
        { id: 14, name: "RTJ Flanges", image: RTJFlanges },
        { id: 15, name: "Reducing Flanges", image: ReducingFlanges },
        { id: 16, name: "Orifice Flanges", image: OrificeFlanges },
        { id: 17, name: "Lap Joint Flanges", image: LapJointFlanges },
        { id: 18, name: "Forged Flanges", image: ForgedFlanges },
      ],
      grades: [
        {
          id: 1,
          name: "Stainless Steel Flanges",
          grades: [
            "ASTM A182 F304",
            "ASTM A182 F304L",
            "ASTM A182 F310",
            "Stainless steel 310 flanges",
            "ASTM A182 F316L",
            "ASTM A182 Gr F321",
            "ASTM A182 F347/347H",
          ],
        },
        {
          id: 2,
          name: "Carbon Steel Flanges",
          grades: [
            "ASTM A105 Forged Steel Flanges",
            "ASTM A350 Lf2 Flanges",
            "ASTM A694 Flanges",
            "ASTM A181 Flanges",
          ],
        },
        {
          id: 3,
          name: "Alloy Steel Flanges",
          grades: [
            "ASTM A182 Gr F1",
            "ASTM A182 Gr F5",
            "ASTM A182 Gr F9",
            "ASTM A182 Gr F11",
            "ASTM A182 Gr F22",
            "ASTM A182 Gr F91",
          ],
        },
        {
          id: 4,
          name: "Other Steel Flanges",
          grades: [
            "Copper Nickel Flanges",
            "Duplex Flanges",
            "Super Duplex Flanges",
            "Titanium Flanges",
            "Inconel 600 Flanges",
            "Inconel 625 Flanges",
            "Incoloy 800 Flanges",
            "Incoloy 825 Flanges",
            "Hastelloy C22 Flanges",
            "Money 400 Flanges",
            "Alloy 20 Flanges",
            "Hastelloy C276 Flanges",
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Sheets/Plates",
      param: "sheetsplates",
      description:
        "Metal plates and sheets serve as foundational materials in manufacturing, crucial for constructing and fabricating components. They provide flat, thin surfaces used in both construction and manufacturing processes. Our Plates are known for their thickness, they are specifically chosen for structural applications due to their robustness and ability to withstand heavy loads. They come in different grades and finishes to accommodate specific requirements such as strength, conductivity, and aesthetic appeal.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Stainless Steel Sheet",
          grades: [
            "304 Stainless Steel Sheet",
            "304L Stainless Steel Sheet",
            "ASTM A240 304H",
            "310 Stainless Steel Plate",
            "316 Stainless Steel Sheet",
            "316L Stainless Steel Sheet",
            "316h Stainless Steel Plate",
            "317L Stainless Steel Sheet", 
            "321 Stainless Steel Plate", 
            "347 Stainless Steel Sheet",
            "409 Stainless Steel Sheet",
            "410 Stainless Steel Plate",
            "446 Stainless Steel Sheet",
            "Stainless Steel 904L Plate",
            "Stainless Steel Perforated Sheet",
            "Stainless Steel Circles",
          ],
        },
        {
          id: 2,
          name: "Carbon Steel Plate",
          grades: [
            "ASTM A515 Gr 70",
            "ASTM A515 Gr 60",
            "ASTM A516 Grade 60",
            "ASTM A516 Grade 65",
            "ASTM A516 Grade 70",
            "ASTM A572 Grade 50",
            "15MO3 Alloy Steel Plate",
            "JIS G3101 SS400 Mild Steel Plate",
            "ASTM A709 Grade 36",
            "ASTM A283 Grade C",
            "ASTM A285 Grade C",
            "ASTM A537 Class 2",
            "C45 Plate",
          ],
        },
        {
          id: 3,
          name: "Alloy Steel Plate",
          grades: [
            "ASTM A387 Grade 5",
            "ASTM A387 Grade 9",
            "ASTM A387 Grade 11",
            "ASTM A387 Grade 12",
            "ASTM A387 Grade 22",
          ],
        },
        {
          id: 4,
          name: "Nickel Alloy Plate",
          grades: [
            "Hastelloy C276 Plate",
            "Hastelloy C22 Plate",
            "Hastelloy B2 Sheet",
            "Inconel 600 Plate",
            "Inconel 601 Plate",
            "Inconel 625 Plate",
            "Incoloy 800 Plate",
            "Incoloy 825 Plate",
            "Monel 400 Plate",
            "Monel K500 Plate",
            "Inconel 718 Plate",
          ],
        },
        {
          id: 5,
          name: "Duplex Steel Plate",
          grades: [
            "2207 Duplex Stainless Steel Plate",
            "ASTM A240 UNS S31803",
            "UNS S32750 Plate",
            "Super Duplex Plate",
          ],
        },
        {
          id: 6,
          name: "Copper Nickel Plate",
          grades: [
            "90/10 Copper Nickel Sheet",
            "70/10 Copper Nickel Sheet",
            "Copper Sheet",
          ],
        },
        {
          id: 7,
          name: "Titanium Sheet",
          grades: [
            "Titanium Grade 2 Sheet",
            "Titanium Grade 5 Sheet",
          ],
        },
        {
          id: 8,
          name: "Maraging Steel Plate",
          grades: [
            "Maraging Steel 300 Alloy Steel Plate",
            "Maraging Steel 350 Plate",
          ],
        },
        {
          id: 9,
          name: "Steel Plate",
          grades: [
            "BS 1501 161 430A",
            "Brass Sheet",
            "Alloy 20 Plate",
            "254 SMO Plate",
            "High Strength Steel Plate",
            "Shipbuilding Steel Plate",
            "Boiler Steel Plates",
            "Manganese Plate",
            "Aluminium Sheet",
            "1S 2062 Grade 8 Plate",
          ],
        },
        {
          id: 10,
          name: "Stuctural Steel Plate",
          grades: [
            "P355nh steel plate",
            "P355gh steel plate",
            "P205gh plate",
            "P275nh steel plate",
            "S1100QL steel plate",
            "S960ql steel plate",
            "S890ql steel plate",
            "S890QL steel plate",
            "S355 steel plate",
            "S355J203 plate",
            "S275JR plate",
            "S235JR steel plate",
            "Heat resistant steel plate",
            "Weather resistant steel plate",
            "16m03 plate",
            "13CrMo4-5 steel plate",
            "10CrMo9-10 steel plate",
            "EN 10028-3 Grade P460NH steel plates",
            "DIN 17155 Steel Plate",
            "ASTM A387 grade 91 plate",
            "Stuctural steel plate",
          ],
        },
        {
          id: 11,
          name: "Other Plates",
          grades: [
            "Chromoly Steel Plate",
            "HIC Resistant Steel Plate",
            "Quenched and Tempered Steel Plate",
            "Alloy N-155",
            "Corten Steel Plate",
            "EN 10149-2 S550mc",
            "Abrasion Resistant Steel Plate",
            "SABS 1431 Grade 300wa Steel Plate",
            "Hot rolled coll",
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Tubes",
      param: "tubes",
      description:
        "We provide a diverse selection of tubes to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Carbon Steel Tubes",
          grades: [
            "BS-3059 Gr 360",
            "ASTM A179 Heat Exchanger Tubes",
            "ASTM A334 GR.1",
            "ASTM A182 Boiler Tubes",
            "SA 17B Gr A Boiler Tubes",
            "13CrMo44 Alloy Steel Boiler Tubes",
          ],
        },
        {
          id: 2,
          name: "Alloy Steel Tubes",
          grades: [
            "SA209 T1",
            "SA213 T2",
            "ASTM A213 T5",
            "ASTM A213 T9",
            "ASTM A213 T11",
            "SA 213 Gr 112",
            "ASTM A213 T22",
            "ASTM A213 T91",
            "ASTM A423 Grade 1",
          ],
        },
        {
          id: 3,
          name: "Stainless Steel Tubes",
          grades: [
            "Electropolished Stainless Steel Tubing",
            "Stainless Steel Capillary Tube",
            "Stainless Steel Heat Exchanger Tube",
            "Stainless Steel Boiler Tube",
            "Stainless Steel Coil Tubing",
            "Stainless Steel Condenser Tubes",
            "Stainless steel precision tube",
            "Stainless steel mechanical tubing",
            "Stainless steel instrumentation tubing",
            "Stainless steel hydraulic tubing",
            "High-temperature steel tubing",
            "Boiler superheater tubes",
            "EN 10216-5",
            "DIN EN 10296-2",
          ],
        },
        {
          id: 4,
          name: "Nickel Alloy Tubes",
          grades: [
            "Inconel 600 Tube",
            "Inconel 625 Tube",
            "Inconel 718 Tube",
            "Hastelloy C276 Tube",
            "Money 400 Seamless Tube",
          ],
        },
        {
          id: 5,
          name: "Other Steel Tubes",
          grades: [
            "Duplex 2205 Tube",
            "Titanium Tube",
            "ASTM A513 Dom Tubing",
            "EN 10297-2 seamless tube",
            "ASTM A269 tubing",
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Round Bars",
      param: "roundbar",
      description:
        "We supply round, square, and rectangular bars used for structural support or machining specialized components. Our bars are customizable to meet specific size and strength requirements, providing versatile solutions in construction, manufacturing, and engineering. These bars play a vital role in industries such as construction, manufacturing, and engineering, ensuring stability and structural integrity.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Nickel Alloy Round Bars",
          grades: [
            "Nickel Alloy Round Bars",
            "Inconel 600 round bar",
            "Inconel 625 round bar",
            "Inconel 718 round bar",
            "Incoloy 825 round bar",
            "Incoloy 800 round bar",
            "Hastelloy C276 round bar",
            "Hastelloy C22 round bar",
            "Hastelloy B2 round bar",
            "Monel 400 round bar",
            "Monel k500 round bar",
          ],
        },
        {
          id: 2,
          name: "Carbon Steel Round Bars",
          grades: [
            "ASTM A105 Round Bar",
            "ASTM A350 LF2 Round Bar",
            "Alloy Steel Round Bar",
          ],
        },
        {
          id: 3,
          name: "Stainless Steel Round Bars",
          grades: [
            "Stainless Steel 304 Round Bar",
            "Stainless Steel 304L Round Bar",
            "Stainless Steel 316 Round Bar",
            "316L Stainless Steel Round Bar",
            "Stainless Steel 310 Round Bar",
            "Stainless Steel 317l Round Bar",
            "Stainless Steel 321 Round Bar",
            "Stainless Steel 347 Round Bar",
            "Stainless Steel 904l Round Bar",
            "15-5 PH Stainless Steel Round Bar",
          ],
        },
        {
          id: 4,
          name: "Other Steel Round Bars",
          grades: [
            "Copper Nickel Round Bar",
            "Copper Round Bar",
            "Duplex 2205 Round Bar",
            "Super Duplex Round Bar",
            "Titanium Round Bar",
            "Titanium Grade 2 Round Bar",
            "Titanium Grade 5 Round Bar",
            "Aluminium Round Bar",
            "Cobalt Alloy Rod",
            "Nitronic 60",
            "Pump Shaft Quality Stainless Steel",
            "Bar",
            "Alloy 20-round bar",
            "Threaded bar",
            "Square bar",
            "Hex bar",
            "Cold-drawn steel bar",
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Wire",
      param: "wire",
      description:
        "The wires we manufacture are thin, precise, and designed to excel in conducting electricity or providing structural support. Known for their durability and versatility, our wires meet standards for reliability across various applications. Whether used in electrical systems or for structural purposes, our wires ensure efficient performance and longevity, making them essential components in diverse industries.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Wire",
          grades: [
            "Stainless Steel Stranded Wire",
          ],
        },
      ],
    },
  ],
  alloys: [],
  materials: [
    {
      id: 1,
      name: "Stainless Steel",
      param: "stainless-steel",
      description:
        "We provide a diverse selection of stainless steel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Stainless Steel Pipe",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Stainless Steel Tube",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Stainless Steel Sheet",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Stainless Steel Round Bar",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Stainless Steel Pipe Fittings",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Stainless Steel Flanges",
          grades: [
          ],
        },
        {
          id: 7,
          name: "Stainless Steel Fasteners",
          grades: [
          ],
        },
        {
          id: 8,
          name: "Stainless Steel Wire",
          grades: [
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Duplex Steel",
      param: "duplex-steel",
      description:
        "We provide a diverse selection of duplex steel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Duplex Steel Pipe",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Duplex 2205 Tube",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Duplex Steel Plate",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Duplex Steel Pipe Fittings",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Duplex Steel Flanges",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Duplex Steel Fastners",
          grades: [
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Super Duplex",
      param: "super-duplex",
      description:
        "We provide a diverse selection of super duplex piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Super Duplex Pipe",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Super Duplex Plate",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Super Duplex Round Bar",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Super Duplex Pipe Fittings",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Super Duplex Stainless Steel Flanges",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Super Duplex Fasteners",
          grades: [
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Nickel",
      param: "nickel",
      description:
        "We provide a diverse selection of nickel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Nickel Pipe",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Nickel Alloy Tubes",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Nickel Alloy Plate",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Nickel Alloy Pipe Fittings",
          grades: [
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Inconel",
      param: "inconel",
      description:
        "We provide a diverse selection of inconel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Inconel Pipe",
          grades: [
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Monel",
      param: "monel",
      description:
        "We provide a diverse selection of monel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Monel 400 (UNS N04400)",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Monel K-500 (UNS N05500)",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Monel R-405 (UNS N04405)",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Monel 401 (UNS N04401)",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Monel 404 (UNS N04404)",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Monel 450",
          grades: [
          ],
        },
        {
          id: 7,
          name: "Monel 502",
          grades: [
          ],
        },
        {
          id: 8,
          name: "Monel 506",
          grades: [
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Hastelloy",
      param: "hastelloy",
      description:
        "We provide a diverse selection of hastelloy piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Hastelloy C-22 (UNS N06022)",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Hastelloy C-276 (UNS N10276)",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Hastelloy C-2000 (UNS N0620)",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Hastelloy B-2 (UNS N10665)",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Hastelloy B-3 (UNS N10675)",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Hastelloy G-30 (UNS N06030)",
          grades: [
          ],
        },
        {
          id: 7,
          name: "Hastelloy G-35 (UNS N06035)",
          grades: [
          ],
        },
        {
          id: 8,
          name: "Hastelloy X (UNS N06002)",
          grades: [
          ],
        },
        {
          id: 9,
          name: "Hastelloy N (UNS N10003)",
          grades: [
          ],
        },
        {
          id: 10,
          name: "Hastelloy C-4 (UNS N06455)",
          grades: [
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Titanium",
      param: "titanium",
      description:
        "We provide a diverse selection of titanium piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "Grade 1",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Grade 2",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Grade 3",
          grades: [
          ],
        },
        {
          id: 4,
          name: "Grade 4",
          grades: [
          ],
        },
        {
          id: 5,
          name: "Grade 5 (Ti-6Al-4V)",
          grades: [
          ],
        },
        {
          id: 6,
          name: "Grade 6 (Ti-5Al-2.5Sn)",
          grades: [
          ],
        },
        {
          id: 7,
          name: "Grade 7 (Ti-0.15Pd)",
          grades: [
          ],
        },
        {
          id: 8,
          name: "Grade 9 (Ti-3Al-2.5V)",
          grades: [
          ],
        },
        {
          id: 9,
          name: "Grade 11 (Ti-0.15Pd, CP Titanium)",
          grades: [
          ],
        },
        {
          id: 10,
          name: "Grade 16 (Ti-0.05Pd, CP Titanium)",
          grades: [
          ],
        },
        {
          id: 11,
          name: "Grade 17 (Ti-0.05Pd, CP Titanium)",
          grades: [
          ],
        },
        {
          id: 12,
          name: "Grade 19 (Ti-3Al-8V-6Cr-4Zr-4Mo)",
          grades: [
          ],
        },
        {
          id: 13,
          name: "Grade 18 (Ti-3Al-2.5V-0.05Pd)",
          grades: [
          ],
        },
        {
          id: 14,
          name: "Grade 12 (Ti-0.3Mo-0.8Ni)",
          grades: [
          ],
        },
        {
          id: 15,
          name: "Grade 23 (Ti-6Al-4V ELI)",
          grades: [
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Copper/Brass",
      param: "copper-brass",
      description:
        "We provide a diverse selection of copper brass piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "C101 (Oxygen-Free Electronic - OFE)",
          grades: [
          ],
        },
        {
          id: 2,
          name: "C110 (Electrolytic Tough Pitch - ETP)",
          grades: [
          ],
        },
        {
          id: 3,
          name: "C120 (Deoxidized Low Phosphorus - DLP)",
          grades: [
          ],
        },
        {
          id: 4,
          name: "C122 (Deoxidized High Phosphorus - DHP)",
          grades: [
          ],
        },
        {
          id: 5,
          name: "C220 (Commercial Bronze, 90%)",
          grades: [
          ],
        },
        {
          id: 6,
          name: "C220 (Commercial Bronze, 90%)",
          grades: [
          ],
        },
        {
          id: 7,
          name: "C102 (Oxygen-Free - OF)",
          grades: [
          ],
        },
        {
          id: 8,
          name: "C145 (Tellurium Copper)",
          grades: [
          ],
        },
        {
          id: 9,
          name: "C172 (Beryllium Copper)",
          grades: [
          ],
        },
        {
          id: 10,
          name: "C182 (Chromium Copper)",
          grades: [
          ],
        },
        {
          id: 11,
          name: "C194 (High-Strength Alloy)",
          grades: [
          ],
        },
        {
          id: 12,
          name: "C210 (Gilding Metal)",
          grades: [
          ],
        },
        {
          id: 13,
          name: "C280 (Muntz Metal, 60/40)",
          grades: [
          ],
        },
        {
          id: 14,
          name: "C260 (Cartridge Brass, 70/30)",
          grades: [
          ],
        },
        {
          id: 15,
          name: "C485 (Architectural Bronze)",
          grades: [
          ],
        },
        {
          id: 16,
          name: "C230 (Red Brass)",
          grades: [
          ],
        },
        {
          id: 17,
          name: "C240 (Low Brass)",
          grades: [
          ],
        },
        {
          id: 18,
          name: "C268 (Yellow Brass)",
          grades: [
          ],
        },
        {
          id: 19,
          name: "C330 (Low-Leaded Brass)",
          grades: [
          ],
        },
        {
          id: 20,
          name: "C360 (Free-Cutting Brass)",
          grades: [
          ],
        },
        {
          id: 21,
          name: "C464 (Naval Brass)",
          grades: [
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Copper Nickel",
      param: "copper-nickel",
      description:
        "We provide a diverse selection of copper nickel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "C71640 (66-30-2-2 Copper-Nickel with Iron and Manganese)",
          grades: [
          ],
        },
        {
          id: 2,
          name: "C71520 (Modified 70-30 Copper-Nickel with Enhanced Properties)",
          grades: [
          ],
        },
        {
          id: 3,
          name: "C96200 (Nickel Silver, 65% Cu, 18% Ni, 17% Zn)",
          grades: [
          ],
        },
        {
          id: 4,
          name: "C96400 (Nickel Silver, 65% Cu, 25% Ni, 10% Zn)",
          grades: [
          ],
        },
        {
          id: 5,
          name: "C70600 (90-10 Copper-Nickel)",
          grades: [
          ],
        },
        {
          id: 6,
          name: "C71500 (70-30 Copper- Nickel)",
          grades: [
          ],
        },
      ],
    },
    {
      id: 12,
      name: "Aluminium",
      param: "aluminium",
      description:
        "We provide a diverse selection of aluminium piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      // types: [
      //   { id: 1, name: "Welded", image: PipesImg },
      //   { id: 2, name: "Seamless", image: PipesImg },
      //   { id: 3, name: "Fabricated", image: PipesImg },
      // ],
      grades: [
        {
          id: 1,
          name: "Aluminium Pipe",
          grades: [
          ],
        },
        {
          id: 2,
          name: "Aluminium Sheet",
          grades: [
          ],
        },
        {
          id: 3,
          name: "Aluminium Round Bar",
          grades: [
          ],
        },
      ],
    },
    {
      id: 13,
      name: "Carbon Steel",
      param: "carbon-steel",
      description:
        "We provide a diverse selection of carbon steel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "AISI 1005",
          grades: [
          ],
        },
        {
          id: 2,
          name: "AISI 1010",
          grades: [
          ],
        },
        {
          id: 3,
          name: "AISI 1018",
          grades: [
          ],
        },
        {
          id: 4,
          name: "AISI 1020",
          grades: [
          ],
        },
        {
          id: 5,
          name: "AISI 1040",
          grades: [
          ],
        },
        {
          id: 6,
          name: "AISI 1045",
          grades: [
          ],
        },
        {
          id: 7,
          name: "AISI 1050",
          grades: [
          ],
        },
        {
          id: 8,
          name: "AISI 1060",
          grades: [
          ],
        },
        {
          id: 9,
          name: "AISI 1070",
          grades: [
          ],
        },
        {
          id: 10,
          name: "AISI 1095",
          grades: [
          ],
        },
        {
          id: 11,
          name: "AISI 4130 (Chromoly Steel)",
          grades: [
          ],
        },
        {
          id: 12,
          name: "AISI 1141 (Resulfurized Carbon Steel)",
          grades: [
          ],
        },
        {
          id: 13,
          name: "AISI 1215 (Free-Machining Carbon Steel)",
          grades: [
          ],
        },
      ],
    },
    {
      id: 14,
      name: "Alloy Steel",
      param: "alloy-steel",
      description:
        "We provide a diverse selection of alloy steel piping materials to meet your specific requirements, offering various sizes, materials, and specifications. Essential for transporting liquids, gases, or solids in industrial processes, pipes are integral to many systems. Whether used in chemical processing, water treatment, or other industries, our pipes ensure durability and reliability for efficient operations.",
      types: [
        { id: 1, name: "Welded", image: PipesImg },
        { id: 2, name: "Seamless", image: PipesImg },
        { id: 3, name: "Fabricated", image: PipesImg },
      ],
      grades: [
        {
          id: 1,
          name: "4130",
          grades: [
          ],
        },
        {
          id: 2,
          name: "4140",
          grades: [
          ],
        },
        {
          id: 3,
          name: "4340",
          grades: [
          ],
        },
        {
          id: 4,
          name: "8620",
          grades: [
          ],
        },
        {
          id: 5,
          name: "8630",
          grades: [
          ],
        },
        {
          id: 6,
          name: "6150",
          grades: [
          ],
        },
        {
          id: 7,
          name: "5160",
          grades: [
          ],
        },
        {
          id: 8,
          name: "H11",
          grades: [
          ],
        },
        {
          id: 9,
          name: "H13",
          grades: [
          ],
        },
        {
          id: 10,
          name: "D2",
          grades: [
          ],
        },
        {
          id: 11,
          name: "A2",
          grades: [
          ],
        },
        {
          id: 12,
          name: "M2",
          grades: [
          ],
        },
        {
          id: 13,
          name: "17-4 PH",
          grades: [
          ],
        },
        {
          id: 14,
          name: "15-5 PH",
          grades: [
          ],
        },
        {
          id: 15,
          name: "Duplex (2205)",
          grades: [
          ],
        },
        {
          id: 16,
          name: "Super Duplex (2507)",
          grades: [
          ],
        },
        {
          id: 17,
          name: "Maraging Steel (200, 250, 300)",
          grades: [
          ],
        },
        {
          id: 18,
          name: "AISI 9310",
          grades: [
          ],
        },
        {
          id: 19,
          name: "52100",
          grades: [
          ],
        },
      ],
    },
  ],
};
