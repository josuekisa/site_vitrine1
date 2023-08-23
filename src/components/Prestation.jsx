import Photo1 from '../assets/epilation.png'
import Photo2 from '../assets/nail.png'
import Photo3 from '../assets/pedicure.png'
import Photo4 from '../assets/cils.png'
import Photo5 from '../assets/cheveux.png'
import Photo6 from '../assets/visage.png'

const Service = () => {
  return (
    <section name="pre" className="w-screen h-screen flex justify-center items-center dark:bg-[#877184]">
    <div className="container flex flex-col items-center">
      <div className=" mb-12 max-w-[510px] text-center">
        <span className="block mb-2 text-lg font-semibold text-primary">
          Nos Services
        </span>
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
          Prestation
        </h2>
        <p className="text-base text-body-color">
         Nous proposons plusieurs prestation dans notre salon.
         Voici quelque unes de nos prestations.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4 justify-center">
      <ServiceCard
  title="Epilation"
  details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
  icon={
    <div className="flex justify-center">
      <img className="w-full h-auto object-cover rounded-t-lg" src={Photo1} alt="Basé sur Tailwind CSS" />
    </div>
  }
/>
    
    <ServiceCard
            title="Soins des mains"
            details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
            icon={
              <div className="flex justify-center">
                <img className="w-full h-auto object-cover rounded-t-lg" src={Photo2} alt="Basé sur Tailwind CSS" />
              </div>
            }
            
          />


          <ServiceCard
            title="Soins des pieds"
            details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
            icon={
              <div className="flex justify-center">
                <img className="w-full h-auto object-cover rounded-t-lg" src={Photo3} alt="Basé sur Tailwind CSS" />
              </div>
            }
          />
          <ServiceCard
            title="Extension cils"
            details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
            icon={
              <div className="flex justify-center">
                <img className="w-full h-auto object-cover rounded-t-lg" src={Photo4} alt="Basé sur Tailwind CSS" />
              </div>
            }
          />
          <ServiceCard
            title="Extension cheveux"
            details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
            icon={
              <div className="flex justify-center">
                <img className="w-full h-auto object-cover rounded-t-lg" src={Photo5} alt="Basé sur Tailwind CSS" />
              </div>
            }
          /> 
            <ServiceCard
            title="soin visage"
            details="Nous aimons travailler avec des clients exigeants, des personnes pour qui la qualité, le service, l'intégrité et l'esthétique sont importants."
            icon={
              <div className="flex justify-center">
                <img className="w-full h-auto object-cover rounded-t-lg" src={Photo6} alt="Basé sur Tailwind CSS" />
              </div>
            }
          /> 
        </div>
      </div>
    </section>
  );
};

export default Service;
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            className={`mb-8 ml-[-62px] flex h-[70px] w-[200px] p-3 items-center justify-center rounded-2xl bg-primary`}
          >
            {icon}
          </div>
          <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
