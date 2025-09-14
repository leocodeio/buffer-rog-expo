import React from 'react';
import { Pressable, Text, ActivityIndicator, View, PressableProps } from 'react-native';
// Simple join helper to avoid extra dependency
function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps extends PressableProps {
  label: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

// Basic tailwind-esque utility. Nativewind is configured, so className passes through.
export function Button({
  label,
  loading,
  variant = 'primary',
  leftIcon,
  rightIcon,
  disabled,
  className,
  textClassName,
  ...rest
}: ButtonProps) {
  const base = 'flex-row items-center justify-center rounded-md px-4 py-2 active:opacity-90';
  const variants: Record<string, string> = {
    primary: 'bg-emerald-600 disabled:bg-emerald-400',
    secondary: 'bg-amber-500 disabled:bg-amber-300',
    outline: 'border border-gray-300 bg-white',
    ghost: 'bg-transparent',
  };

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      className={cx(base, variants[variant], className)}
      {...rest}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={cx('text-white font-medium text-sm', variant === 'outline' && 'text-gray-700', variant === 'ghost' && 'text-emerald-600', textClassName)}>
          {label}
        </Text>
      )}
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </Pressable>
  );
}

export default Button;
