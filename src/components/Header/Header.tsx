"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "../ui/separator"
import { NavLink } from "react-router-dom"

export function NavigationMenuDemo() {
  return (
    <>
    <div className="flex items-center lg:px-[400px] justify-center lg:justify-center p-4 lg:flex-col flex-col gap-2">
    <h1 className="text-white font-bold">&lt;helena.dev/&gt;</h1>
    <NavigationMenu className="text-white">
      <NavigationMenuList>
      <NavigationMenuItem className="cursor-pointer">
          <NavLink to="/" > 
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Inicio
            </NavigationMenuLink>
          </NavLink> 
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <NavLink to={'/contato'}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
              <NavigationMenuTrigger>
                Sobre
              </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem title="Sobre mim" href='/about'>
                  Conheça um pouco mais sobre minhas habilidades.
              </ListItem>
              <ListItem title="Projetos" href="/projects">
                  Explore meu portfólio de projetos e veja o que eu posso fazer por você
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    <Separator className="border border-zinc-900	" />
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-zinc-400 focus:bg-transparent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-zinc-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
