import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd ? '#d10d0daa' : 'black'} text={showAdd ? 'Close' : 'Add'}/> 
        </header>
    )
}

export default Header
