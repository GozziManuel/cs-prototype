import TripCard from "../components/TripCard";

const trips = [
  {
    id: 1,
    name: "Lake Trip",
    city: "Como",
    startDate: "2024-07-10",
    endDate: "2024-07-12",
    participants: [
      {
        id: 1,
        firstName: "Mario",
        lastName: "Rossi",
        email: "mario.rossi@email.com",
        phone: "3331112222",
        taxCode: "RSSMRA80A01H501U",
      },
      {
        id: 2,
        firstName: "Luigi",
        lastName: "Verdi",
        email: "luigi.verdi@email.com",
        phone: "3331113333",
        taxCode: "VRDLGU85B02H501Z",
      },
      {
        id: 3,
        firstName: "Giulia",
        lastName: "Russo",
        email: "giulia.russo@email.com",
        phone: "3331114444",
        taxCode: "RSSGLI90C03H501X",
      },
      {
        id: 4,
        firstName: "Paolo",
        lastName: "Conti",
        email: "paolo.conti@email.com",
        phone: "3331115555",
        taxCode: "CNTPLA88D04H501Y",
      },
      {
        id: 5,
        firstName: "Alessandro",
        lastName: "Fontana",
        email: "alessandro.fontana@email.com",
        phone: "3331116666",
        taxCode: "FNTLSN87E05H501W",
      },
      {
        id: 6,
        firstName: "Martina",
        lastName: "Esposito",
        email: "martina.esposito@email.com",
        phone: "3331117777",
        taxCode: "SPSMRT92F06H501V",
      },
    ],
  },
  {
    id: 2,
    name: "Mountain Hike",
    city: "Trento",
    startDate: "2024-08-05",
    endDate: "2024-08-07",
    participants: [
      {
        id: 1,
        firstName: "Anna",
        lastName: "Bianchi",
        email: "anna.bianchi@email.com",
        phone: "3342221111",
        taxCode: "BNCNNA85G07H501U",
      },
      {
        id: 2,
        firstName: "Marco",
        lastName: "Neri",
        email: "marco.neri@email.com",
        phone: "3342222222",
        taxCode: "NRIMRC84H08H501Z",
      },
      {
        id: 3,
        firstName: "Elena",
        lastName: "Greco",
        email: "elena.greco@email.com",
        phone: "3342223333",
        taxCode: "GRCELN89I09H501X",
      },
      {
        id: 4,
        firstName: "Davide",
        lastName: "Romano",
        email: "davide.romano@email.com",
        phone: "3342224444",
        taxCode: "RMNDVD86L10H501Y",
      },
      {
        id: 5,
        firstName: "Sara",
        lastName: "Ferrari",
        email: "sara.ferrari@email.com",
        phone: "3342225555",
        taxCode: "FRRSRA91M11H501W",
      },
    ],
  },
  {
    id: 3,
    name: "Beach Weekend",
    city: "Rimini",
    startDate: "2024-06-20",
    endDate: "2024-06-22",
    participants: [
      {
        id: 1,
        firstName: "Luca",
        lastName: "Galli",
        email: "luca.galli@email.com",
        phone: "3353331111",
        taxCode: "GLLLCU83N12H501V",
      },
      {
        id: 2,
        firstName: "Chiara",
        lastName: "Moretti",
        email: "chiara.moretti@email.com",
        phone: "3353332222",
        taxCode: "MRTCHR90P13H501U",
      },
      {
        id: 3,
        firstName: "Simone",
        lastName: "De Luca",
        email: "simone.deluca@email.com",
        phone: "3353333333",
        taxCode: "DLCMNE88Q14H501Z",
      },
      {
        id: 4,
        firstName: "Francesca",
        lastName: "Rinaldi",
        email: "francesca.rinaldi@email.com",
        phone: "3353334444",
        taxCode: "RNLFNC92R15H501X",
      },
      {
        id: 5,
        firstName: "Alessio",
        lastName: "Barbieri",
        email: "alessio.barbieri@email.com",
        phone: "3353335555",
        taxCode: "BRBLSS87S16H501Y",
      },
    ],
  },
  {
    id: 4,
    name: "Cultural Visit",
    city: "Florence",
    startDate: "2024-09-15",
    endDate: "2024-09-17",
    participants: [
      {
        id: 1,
        firstName: "Matteo",
        lastName: "Ricci",
        email: "matteo.ricci@email.com",
        phone: "3364441111",
        taxCode: "RCCMTT85T17H501W",
      },
      {
        id: 2,
        firstName: "Elisa",
        lastName: "Marino",
        email: "elisa.marino@email.com",
        phone: "3364442222",
        taxCode: "MRNLSA91U18H501V",
      },
      {
        id: 3,
        firstName: "Giorgio",
        lastName: "Lombardi",
        email: "giorgio.lombardi@email.com",
        phone: "3364443333",
        taxCode: "LMBGRG84V19H501U",
      },
      {
        id: 4,
        firstName: "Valentina",
        lastName: "Costa",
        email: "valentina.costa@email.com",
        phone: "3364444444",
        taxCode: "CSTVLN89W20H501Z",
      },
      {
        id: 5,
        firstName: "Andrea",
        lastName: "Rizzo",
        email: "andrea.rizzo@email.com",
        phone: "3364445555",
        taxCode: "RZZNDR86X21H501X",
      },
    ],
  },
];
export default function Triplist() {
  console.log(trips);

  return (
    <div className="container-sm">
      <h1 className="my-4">Triplist</h1>
      <div className="row g-3">
        {trips.map((el) => {
          return <TripCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}
