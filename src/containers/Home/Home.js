import ItemCounter from '../../components/ItemCounter/ItemCounter';
import ItemCounterExtraClass from '../../components/ItemCounterExtraClass/ItemCounterExtraClass';
import UserForm from '../../components/UserForm/UserForm';
import UserFormExtraClass from '../../components/UserFormExtraClass/UserFormExtraClass';
import ConsoleRepeater from '../../ConsoleRepeater/ConsoleRepeater';

const Home = ({ greeting }) => {
    const showConsole = (value) => {
        console.log(value);
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <br />
            <hr />

            <ItemCounter onAdd={showConsole} /> {/* initialValue, maxValue, onAdd */}
            <UserForm />
            <ConsoleRepeater />

            <UserFormExtraClass />
            <ItemCounterExtraClass />
        </div>
    );
}

export default Home;