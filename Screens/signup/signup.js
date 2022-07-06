import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TextInput } from "react-native"
//import { styles } from "../../styles/signupi";
import { Svg,  Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";



function Login1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group5}>
        <View style={styles.socialButton3Row}>
          <View style={styles.socialButton3}>
            <View style={styles.rectangle3}>
              <View style={styles.facebook}>
                <Svg viewBox="0 0 9.35 18" style={styles.facebook1}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(59,89,152,1)"
                    d="M9.35 0.13 L9.35 2.99 L7.65 2.99 C6.32 2.99 6.07 3.62 6.07 4.54 L6.07 6.59 L9.24 6.59 L8.82 9.79 L6.07 9.79 L6.07 18.00 L2.76 18.00 L2.76 9.79 L0.00 9.79 L0.00 6.59 L2.76 6.59 L2.76 4.23 C2.76 1.49 4.44 0.00 6.88 0.00 C8.05 0.00 9.05 0.09 9.35 0.13 Z"
                  ></Path>
                </Svg>
              </View>
            </View>
          </View>
          <View style={styles.socialButton2}>
            <View style={styles.rectangle31}>
              <View style={styles.google}>
                <View style={styles.shapeStackStack}>
                  <View style={styles.shapeStack}>
                    <Svg viewBox="0 0 3.99 8.4" style={styles.shape}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(251,187,0,1)"
                        d="M3.99 6.02 L3.36 8.36 L1.07 8.40 C0.39 7.13 0.00 5.68 0.00 4.14 C0.00 2.65 0.36 1.24 1.01 0.00 L1.01 0.00 L3.05 0.37 L3.94 2.40 C3.75 2.95 3.65 3.53 3.65 4.14 C3.65 4.80 3.77 5.43 3.99 6.02 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 13.56 7.12" style={styles.shape2}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(40,180,70,1)"
                        d="M13.56 5.14 L13.56 5.14 C12.02 6.38 10.06 7.12 7.93 7.12 C4.50 7.12 1.52 5.21 0.00 2.39 L2.92 0.00 C3.68 2.03 5.63 3.47 7.93 3.47 C8.91 3.47 9.84 3.21 10.63 2.74 L13.56 5.14 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 13.74 7.26" style={styles.shape3}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(241,67,54,1)"
                        d="M13.74 2.07 L10.82 4.46 C10.00 3.95 9.03 3.65 7.99 3.65 C5.65 3.65 3.65 5.16 2.93 7.26 L0.00 4.86 L0.00 4.86 C1.50 1.97 4.52 0.00 7.99 0.00 C10.18 0.00 12.18 0.78 13.74 2.07 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <Svg viewBox="0 0 8.8 8.7" style={styles.shape1}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(81,142,248,1)"
                      d="M8.64 0.00 C8.75 0.54 8.80 1.11 8.80 1.68 C8.80 2.33 8.73 2.95 8.61 3.56 C8.17 5.62 7.02 7.42 5.44 8.70 L5.44 8.70 L2.87 8.57 L2.50 6.30 C3.56 5.68 4.38 4.72 4.81 3.56 L0.00 3.56 L0.00 0.00 L4.88 0.00 L8.64 0.00 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.loginInstantly}>Login instantly:</Text>
      <View style={styles.group}>
        <Text style={styles.eMailIdOrMobile}>E-mail ID or Mobile Number</Text>
        <View style={styles.lineCopy}>
          <View style={styles.rectangle32}>
            <View style={styles.johndoeGmaRow}>
              <TextInput style={styles.johndoeGma}>dujama@gma</TextInput>
              <View style={styles.rectangle4}></View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.orLoginWithEmail}>or login with email/mobile</Text>
      <View style={styles.group1}>
        <Text style={styles.password}>Password</Text>
        <View style={styles.lineCopy1}>
          <View style={styles.rectangle33}>
            <View style={styles.styleRow}>
              <Text style={styles.style}>••••••••</Text>
              <View style={styles.eye}>
                <View style={styles.shape4Stack}>
                  <Svg viewBox="-0.5 -0.5 19 14" style={styles.shape4}>
                    <Path
                      strokeWidth={1}
                      fill="transparent"
                      stroke="rgba(139,149,154,1)"
                      d="M0.00 6.00 C0.00 6.00 3.09 0.00 8.50 0.00 C13.91 0.00 17.00 6.00 17.00 6.00 C17.00 6.00 13.91 12.00 8.50 12.00 C3.09 12.00 0.00 6.00 0.00 6.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="-0.5 -0.5 6.64 6.5" style={styles.oval}>
                    <Path
                      strokeWidth={1}
                      fill="transparent"
                      stroke="rgba(139,149,154,1)"
                      d="M2.32 4.50 C3.60 4.50 4.64 3.49 4.64 2.25 C4.64 1.01 3.60 0.00 2.32 0.00 C1.04 0.00 0.00 1.01 0.00 2.25 C0.00 3.49 1.04 4.50 2.32 4.50 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.group6}>
        <View style={styles.rememberRow}>
          <View style={styles.remember}>
            <View style={styles.shape5StackRow}>
              <View style={styles.shape5Stack}>
                <Svg viewBox="0 0 13.85 13.85" style={styles.shape5}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(8,87,171,1)"
                    d="M6.92 0.00 C3.10 0.00 0.00 3.10 0.00 6.92 C0.00 10.74 3.10 13.85 6.92 13.85 C10.74 13.85 13.85 10.74 13.85 6.92 C13.85 3.10 10.74 0.00 6.92 0.00 Z"
                  ></Path>
                </Svg>
                <View style={styles.check}>
                  <Svg viewBox="-0.5 -0.5 8 5.85" style={styles.shape6}>
                    <Path
                      strokeWidth={1}
                      fill="transparent"
                      stroke="rgba(255,255,255,1)"
                      d="M6.00 0.00 L1.88 3.85 L0.00 2.10 "
                    ></Path>
                  </Svg>
                </View>
              </View>
              <Text style={styles.rememberMe}>Remember me</Text>
            </View>
          </View>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.buttonDark}>
          <View style={styles.button}>
            <View style={styles.rectangle34}>
              <Text style={styles.text}>Login to my account</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iconRow}>
        <Icon name="menu" style={styles.icon}></Icon>
        <View style={styles.group2}>
          <Text style={styles.dujamaFamily}>DUJAMA FAMILY</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.dontHaveAnAccounStack}>
          <Text style={styles.dontHaveAnAccoun}>Don’t have an account?</Text>
          <Text style={styles.registerNow}>Register now</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group5: {
    height: 36,
    width: 322,
    flexDirection: "row",
    marginTop: 344,
    marginLeft: 19
  },
  socialButton3: {
    height: 36,
    width: 149
  },
  rectangle3: {
    height: 36,
    width: 149,
    borderWidth: 1,
    borderColor: "rgba(173,186,200,0.4)",
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,1)"
  },
  facebook: {
    height: 16,
    width: 10,
    marginTop: 10,
    marginLeft: 70
  },
  facebook1: {
    height: 16,
    width: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  socialButton2: {
    height: 36,
    width: 149,
    marginLeft: 24
  },
  rectangle31: {
    height: 36,
    width: 149,
    borderWidth: 1,
    borderColor: "rgba(173,186,200,0.4)",
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,1)"
  },
  google: {
    height: 16,
    width: 17,
    marginTop: 10,
    marginLeft: 66
  },
  shape: {
    position: "absolute",
    height: 8,
    width: 4,
    top: 4,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape2: {
    position: "absolute",
    height: 7,
    width: 13,
    top: 10,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape3: {
    position: "absolute",
    height: 7,
    width: 13,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shapeStack: {
    top: 0,
    left: 0,
    width: 14,
    height: 17,
    position: "absolute"
  },
  shape1: {
    position: "absolute",
    height: 8,
    width: 8,
    top: 7,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shapeStackStack: {
    width: 17,
    height: 17
  },
  socialButton3Row: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  loginInstantly: {
    backgroundColor: "transparent",
    color: "rgba(139,149,154,1)",
    fontSize: 13,
    marginTop: -67,
    marginLeft: 141
  },
  group: {
    height: 56,
    width: 322,
    marginTop: 119,
    marginLeft: 19
  },
  eMailIdOrMobile: {
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(139,149,154,1)",
    fontSize: 13
  },
  lineCopy: {
    height: 36,
    width: 322,
    marginTop: 5
  },
  rectangle32: {
    height: 36,
    width: 322,
    borderWidth: 1,
    borderColor: "rgba(1,31,63,1)",
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  johndoeGma: {
    backgroundColor: "transparent",
    color: "rgba(1,31,63,1)",
    fontSize: 13
  },
  rectangle4: {
    height: 14,
    width: 1,
    borderRadius: 100,
    backgroundColor: "rgba(62,74,89,0.45)",
    marginLeft: 3
  },
  johndoeGmaRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 221,
    marginLeft: 12,
    marginTop: 12
  },
  orLoginWithEmail: {
    backgroundColor: "transparent",
    color: "rgba(139,149,154,1)",
    fontSize: 13,
    marginTop: -88,
    marginLeft: 114
  },
  group1: {
    height: 56,
    width: 322,
    marginTop: 98,
    marginLeft: 19
  },
  password: {
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(139,149,154,1)",
    fontSize: 13
  },
  lineCopy1: {
    height: 36,
    width: 322,
    marginTop: 5
  },
  rectangle33: {
    height: 36,
    width: 322,
    borderWidth: 1,
    borderColor: "rgba(173,186,200,0.4)",
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  style: {
    backgroundColor: "transparent",
    color: "rgba(1,31,63,1)",
    fontSize: 13
  },
  eye: {
    height: 11,
    width: 16,
    marginLeft: 238,
    marginTop: 1
  },
  shape4: {
    position: "absolute",
    height: 13,
    width: 18,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval: {
    position: "absolute",
    height: 6,
    width: 6,
    top: 3,
    left: 5,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape4Stack: {
    width: 18,
    height: 13
  },
  styleRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 12,
    marginTop: 12
  },
  group6: {
    height: 16,
    width: 302,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 29
  },
  remember: {
    height: 16,
    width: 96,
    flexDirection: "row"
  },
  shape5: {
    position: "absolute",
    height: 13,
    width: 13,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  check: {
    position: "absolute",
    top: 4,
    left: 4,
    height: 4,
    width: 6
  },
  shape6: {
    height: 5,
    width: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape5Stack: {
    width: 13,
    height: 13,
    marginTop: 3
  },
  rememberMe: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(139,149,154,1)",
    fontSize: 13,
    marginLeft: 6
  },
  shape5StackRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: -7
  },
  forgotPassword: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "right",
    color: "rgba(8,87,171,1)",
    fontSize: 13,
    marginLeft: 112
  },
  rememberRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: -8
  },
  group4: {
    height: 36,
    width: 322,
    marginTop: 28,
    marginLeft: 19
  },
  buttonDark: {
    height: 36,
    width: 322
  },
  button: {
    height: 36,
    width: 322
  },
  rectangle34: {
    height: 36,
    width: 322,
    borderRadius: 6,
    backgroundColor: "rgba(8,87,171,1)"
  },
  text: {
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 108
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  group2: {
    height: 46,
    width: 200,
    backgroundColor: "rgba(255,255,255,0.98)",
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center",
    marginLeft: 41
  },
  dujamaFamily: {
    backgroundColor: "transparent",
    color: "rgba(62,74,89,1)",
    fontSize: 22,
    fontFamily: "cabin-sketch-700",
    alignSelf: "center"
  },
  iconRow: {
    height: 46,
    flexDirection: "row",
    marginTop: -606,
    marginLeft: 9,
    marginRight: 70
  },
  group3: {
    height: 13,
    width: 204,
    marginTop: 579,
    marginLeft: 75
  },
  dontHaveAnAccoun: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    lineHeight: 14,
    color: "rgba(139,149,154,1)",
    fontSize: 13
  },
  registerNow: {
    position: "absolute",
    top: 0,
    left: 133,
    backgroundColor: "transparent",
    lineHeight: 14,
    color: "rgba(8,87,171,1)",
    fontSize: 13
  },
  dontHaveAnAccounStack: {
    width: 207,
    height: 14
  }
});

export default Login1;
