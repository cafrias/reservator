import React from 'react';

export default function LoginForm(props){
    return (<form>
        <label>Email:
            <input type="email"></input>
        </label>
        <label>Password:
            <input type="password"></input>
        </label>
        <button type="submit">Send</button>
    </form>)
}