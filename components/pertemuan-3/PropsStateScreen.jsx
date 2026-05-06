import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileDisplay from "./ProfileDisplay";

// Komponen InputRow: menerima label, value, dan setter via PROPS
function InputRow({ label, value, onChangeText, placeholder, keyboardType }) {
  return (
    <View style={styles.inputRow}>
      <Text style={styles.inputLabel}>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}   // STATE diupdate langsung saat mengetik
        placeholder={placeholder}
        placeholderTextColor="#a0aec0"
        keyboardType={keyboardType || "default"}
      />
    </View>
  );
}

export default function PropsStateScreen() {
  // STATE - perubahan langsung memicu re-render tanpa tombol
  const [nama, setNama] = useState("Bambang Pamungkas");
  const [nip, setNip] = useState("1234567890");
  const [jabatan, setJabatan] = useState("Rektor");
  const [institusi, setInstitusi] = useState("IBI Kesatuan");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.pageTitle}>Props & State Demo</Text>

        {/* ===== BAGIAN FORM (INPUT) ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>📝 Form Input</Text>
          <View style={styles.formCard}>
            <InputRow
              label="Nama"
              value={nama}
              onChangeText={setNama}
              placeholder="Masukkan nama..."
            />
            <InputRow
              label="NIP"
              value={nip}
              onChangeText={setNip}
              placeholder="Masukkan NIP..."
              keyboardType="numeric"
            />
            <InputRow
              label="Jabatan"
              value={jabatan}
              onChangeText={setJabatan}
              placeholder="Masukkan jabatan..."
            />
            <InputRow
              label="Institusi"
              value={institusi}
              onChangeText={setInstitusi}
              placeholder="Masukkan institusi..."
            />

            {/* Tombol Submit (dekoratif sesuai gambar) */}
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== BAGIAN PREVIEW (via PROPS) ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>👁️ Preview (via Props)</Text>

          {/* ProfileDisplay menerima data dari state di atas via PROPS */}
          <ProfileDisplay
            nama={nama}
            nip={nip}
            jabatan={jabatan}
            institusi={institusi}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  scroll: {
    padding: 16,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a202c",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4a5568",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  inputLabel: {
    width: 70,
    fontSize: 13,
    color: "#4a5568",
    fontWeight: "500",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cbd5e0",
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 13,
    color: "#1a202c",
    backgroundColor: "#f7fafc",
  },
  submitBtn: {
    marginTop: 6,
    backgroundColor: "#38bdf8",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 36,
  },
  submitText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});
