import { Image, StyleSheet, Text, View } from "react-native";

// Komponen ini menerima data dari parent via PROPS
// dan menampilkannya secara real-time
export default function ProfileDisplay({ nama, nip, jabatan, institusi }) {
  return (
    <View style={styles.card}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Info rows */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Nama :</Text>
        <Text style={styles.value}>{nama || "-"}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>NIP :</Text>
        <Text style={styles.value}>{nip || "-"}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Jabatan :</Text>
        <Text style={styles.value}>{jabatan || "-"}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Institusi :</Text>
        <Text style={styles.value}>{institusi || "-"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#333",
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#4a5568",
    width: 75,
    fontWeight: "500",
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: "#1a202c",
    borderWidth: 1,
    borderColor: "#cbd5e0",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#f7fafc",
  },
});
