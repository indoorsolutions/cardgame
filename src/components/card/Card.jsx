import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet } from "react-native";
import cn from "react-native-classnames";
import { Cards, CardSides, Colors } from "../../commons";
import { Animated } from "react-native";
import { CardReverse } from "./CardReverse";
import { CardObverse } from "./CardObverse";

interface ICardProps {
  kind: string;
  side: string;
  selected?: boolean;
  guessed?: boolean;
  onPress?: () => void;
}

export const Card = (props: ICardProps) => {
  const rotate = useRef(new Animated.Value(0)).current;

  const rotateCard = (rotateTo) => {
    Animated.timing(rotate, {
      toValue: rotateTo,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      props.onFlip && props.onFlip();
    });
  };
  const rotateAngle = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const opacityObverse = rotate.interpolate({
    inputRange: [0, 0.49, 0.5, 1],
    outputRange: [1, 1, 0, 0],
  });
  const opacityReverse = rotate.interpolate({
    inputRange: [0, 0.49, 0.5, 1],
    outputRange: [0, 0, 1, 1],
  });

  useEffect(() => {
    rotateCard(props.side === CardSides.OBVERSE ? 0 : 1);
  }, [props.side]);

  const getIcon = () => {
    return "cards-" + props.kind;
  };
  const getColor = () => {
    return props.kind === Cards.DIAMOND || props.kind === Cards.HEART
      ? Colors.RED
      : Colors.BLACK;
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{ rotateY: rotateAngle }, { perspective: 1000 }],
        },
      ]}
    >
      <Pressable style={{ flex: 1 }} onPress={props.onPress}>
        <Animated.View style={[styles.side, { opacity: opacityObverse }]}>
          <CardObverse
            icon={getIcon()}
            color={getColor()}
            style={cn(styles, {
              guessed: props.guessed,
              selected: props.selected,
            })}
          />
        </Animated.View>
        <Animated.View style={[styles.side, { opacity: opacityReverse }]}>
          <CardReverse />
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 180,
    margin: 8,
  },
  side: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  guessed: {
    borderWidth: 3,
    padding: 6,
    borderColor: Colors.RED,
  },
  selected: {
    borderWidth: 3,
    padding: 6,
    borderColor: Colors.GREEN,
  },
});
