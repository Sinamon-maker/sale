import React, { useState, Fragment } from "react";
import { View, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";
import colors from "../../config/colors";
import PickerItem from "../PickerItem";

import styles from "./styles";

function AppPicker({
  icon,
  placeholder,
  listCategories,
  selectedItem,
  PickerItemComponent=PickerItem,
  numberOfColumns = 1,
  onSelectPickerValue,
  width='100%',
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.inputContainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.medium}
              size={20}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.category}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.modalButton}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.closeBtn}>
              <AppText style={styles.closeBtnText}>Close</AppText>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <FlatList
        numColumns= {numberOfColumns}
          data={listCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                  setModalVisible(false);
                  onSelectPickerValue(item);
                }}
                         />
          )}
        />
      </Modal>
    </>
  );
}

export default AppPicker;
