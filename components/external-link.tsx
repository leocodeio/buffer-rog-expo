import { Href, Link } from 'expo-router';
import { Linking } from 'react-native';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

export function ExternalLink({ href, className = '', ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      className={`text-blue-600 underline ${className}`}
      onPress={async (event) => {
        if (process.env.EXPO_OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in the default browser.
          await Linking.openURL(href);
        }
      }}
    />
  );
}
