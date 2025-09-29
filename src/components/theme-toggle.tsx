"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled className="w-full sm:w-auto">
        <Monitor className="w-4 h-4" />
        <span className="ml-2 hidden sm:inline">Тема</span>
      </Button>
    );
  }

  const themes = [
    { name: "light", icon: Sun, label: "Светлая", description: "Светлая тема" },
    { name: "dark", icon: Moon, label: "Тёмная", description: "Тёмная тема" },
    { name: "system", icon: Monitor, label: "Системная", description: "Следует системным настройкам" },
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="relative overflow-hidden w-full sm:w-auto"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
            <span className="ml-2 hidden sm:inline">{currentTheme.label}</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 sm:w-64">
        {themes.map((themeOption) => {
          const ThemeIcon = themeOption.icon;
          const isSelected = theme === themeOption.name;
          
          return (
            <DropdownMenuItem
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center w-full"
              >
                <ThemeIcon className="w-4 h-4 mr-3" />
                <div className="flex-1">
                  <div className="font-medium">{themeOption.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {themeOption.description}
                  </div>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
