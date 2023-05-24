import Header from '@/components/header';

//  Chaïmae Elmaghrani  Safa Azzouz  Ayoub BOUSSAIDI	
const members = [
  {
    "id": 1,
    "name": "Chaïmae Elmaghrani",
    "email": "c.elmaghrani@etu.enset-media.ac.ma",
    "imageUrl":  "./chaimae.png"
    },
  {
    "id": 2,
    "name": "Oumayma FADIL",
    "email": "o.fadil@etu.enset-media.ac.ma",
    "imageUrl": "./oumayma.png"
  },
  {
    "id": 3,
    "name": "Safa Azzouz",
    "email": "s.azzouz@etu.enset-media.ac.ma",
    "imageUrl":  "./safa.png"
   },
  {
    "id": 4,
    "name": "Abderrazzaq LAANAOUI",
    "email": "a.laanaoui@etu.enset-media.ac.ma",
    "imageUrl":  "./abderrazzaq.png"
   },
  {
    "id": 5,
    "name": "Ayoub BOUSSAIDI",
    "email": "a.boussaidi@etu.enset-media.ac.ma",
    "imageUrl": "./ayoub.png"
  }
]
const OurTeam = () => {
    return (
      <>
      <Header />
      <div className="bg-white py-10 sm:py-10 mt-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Equipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Des élèves ingénieurs en Génie du Logiciel et des Systèmes Informatiques Distribués à l’École Normale Supérieure de l’Enseignement Technique de Mohammedia.</p>
          </div>
          <ul email="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          { members.map(member => 
            (<li key={member.id}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={member.imageUrl} alt={member.name+ " image"}/>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{member.email}</p>
                </div>
              </div>
            </li>))
          }
          </ul>
        </div>
      </div>
</>
    );
    }

    export default OurTeam;