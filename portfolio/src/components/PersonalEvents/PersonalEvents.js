
import styles from './PersonalEvents.module.css';
import hackathon1 from '../../assets/images/events/hackathon-01.png';

const PersonalEvents = () => (
  <div className={styles.PersonalEvents}>
    <div className='bg-white dark:bg-appBackground mt-24' id='Events'>
      <h1 className='text-5xl font-extrabold text-appBackground dark:text-appBlue mb-16'>Events</h1>
      <div className='container w-4/5 mx-auto'>
        <div className='w-1/2 mx-auto'>
          <a href="https://forms.gle/ZKnBgM42LC9ie5YW8">
            <img src={hackathon1} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

PersonalEvents.propTypes = {};

PersonalEvents.defaultProps = {};

export default PersonalEvents;
