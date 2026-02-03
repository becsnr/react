// 🎯 Objetivo: Criar um Layout reutilizável
// 🧠 Regras: Layout mostra: um <header>, um <main> com {children}
// App coloca conteúdo dentro do Layout

function Layout({children}) {
    return (
        <>
            <header>Header</header>
            <main>{children}</main>
        </>
        
    )
}

export default Layout