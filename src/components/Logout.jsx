import React from 'react';

const style = {
    button: `
        bg-gray-200
        px-4
        py-2
        hover-bg-gray-300
        rounded
    `,
}

const Logout = () => {
  return (
    <button className={style.button}>
        Logout
    </button>
  )
}

export default Logout