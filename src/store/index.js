
import Vuex from "vuex";
import { createStore } from 'vuex';
// import { db,  firebaseApp, storage, functions,auth } from "../firebaseConfig";
 
// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import {
//   collection,
//   getDocs,
//   where,
//   query,
//   doc,
//   deleteDoc,
//   updateDoc,
//   setDoc,
//   addDoc,
//   getDoc,
//   onSnapshot,
//   DocumentReference,
//   orderBy,
// } from "firebase/firestore";
// import { httpsCallable, getFunctions } from "firebase/functions";
export default new Vuex.createStore({
    state: {
      langIcon: "",
      langLangauge: "",
      isActive: false,
      departments: [],
      users: [],
      dataSet: [],
      citys: [],
      countries: [],
      branchInfo: [],
      agents: [],
      laundry: [],
      paymentType: [],
      currencyUnit: [],
      roomFeatures: [],
      roomTypes: [],
      stocks: [],
      roomGroup: [],
      notifications: [],
      expenses: [],
      roomInfo: [],
      roomCheck: [],
      reservations: [],
      guest: [],
      employees: [],
      invoices:[],
      unsubscribeRoomInfo: null,
    },
  
    getters: {
      GetDepartments(state) {
        return state.departments;
      },
      GetEmployees(state) {
        return state.employees;
      },
      GetCitys(state) {
        return state.citys;
      },
      GetCountries(state) {
        return state.countries;
      },
      GetBranchInfo(state) {
        return state.branchInfo;
      },
      GetAgents(state) {
        return state.agents;
      },
      GetLaundry(state) {
        return state.laundry;
      },
      GetPaymentType(state) {
        return state.paymentType;
      },
      GetCurrencyUnit(state) {
        return state.currencyUnit;
      },
      GetRoomFeatures(state) {
        return state.roomFeatures;
      },
      GetRoomCheck(state) {
        return state.roomCheck;
      },
      GetRoomTypes(state) {
        return state.roomTypes;
      },
      GetGuest(state) {
        return state.guest;
      },
      GetExpenses(state) {
        return state.expenses;
      },
      GetInvoices(state){
        return state.invoices;
      },
      GetReservations(state) {
        return state.reservations;
      },
      GetStocks(state) {
        return state.stocks;
      },
      GetRoomGroups(state) {
        return state.roomGroup;
      },
      GetRoomInfo(state) {
        return state.roomInfo;
      },
      GetNotifications(state) {
        return state.notifications;
      },
      GetUsers(state) {
        return state.users;
      },
      langIcon: (state) => {
        return state.langIcon;
      },
      langLangauge: (state) => {
        return state.langLangauge;
      },
    },
    mutations: {
      DeleteDataSet(state, payload) {
        const findItem = state.dataSet.findIndex((el) => {
          return el.id == payload.data.id;
        });
  
        state.employees.splice(findItem, 1);
      },
      SetDepartments(state, payload) {
        state.departments = payload;
      },
      SetEmployees(state, payload) {
        state.employees = payload;
      },
      SetInvoices(state,payload){
        state.invoices=payload;
      },
      SetCitys(state, payload) {
        state.citys = payload;
      },
      SetCountries(state, payload) {
        state.countries = payload;
      },
      SetBranchInfo(state, payload) {
        state.branchInfo = payload;
      },
      SetAgents(state, payload) {
        state.agents = payload;
      },
      SetLaundry(state, payload) {
        state.laundry = payload;
      },
      SetPaymentType(state, payload) {
        state.paymentType = payload;
      },
      SetCurrencyUnit(state, payload) {
        state.currencyUnit = payload;
      },
      SetRoomFeatures(state, payload) {
        state.roomFeatures = payload;
      },
      SetReservations(state, payload) {
        state.reservations = payload;
      },
      SetGuest(state, payload) {
        state.guest = payload;
      },
      SetRoomTypes(state, payload) {
        state.roomTypes = payload;
      },
      SetRoomInfo(state, payload) {
        state.roomInfo = payload;
      },
      SetRoomCheck(state, payload) {
        state.roomCheck = payload;
      },
      SetNotifications(state, payload) {
        state.notifications = payload;
      },
      SetRoomGroups(state, payload) {
        state.roomGroup = payload;
      },
      SetExpenses(state, payload) {
        state.expenses = payload;
      },
      SetUsers(state, payload) {
        state.users = payload;
      },
      SetStocks(state, payload) {
        state.stocks = payload;
      },
      changeLang(state, payload) {
        localStorage.setItem("currentLanguage", payload.id);
        localStorage.setItem("currentLanguageIcon", payload.icon);
        state.langIcon = payload.icon || "flag-icon-tr";
        state.langLangauge = payload.id || "TR";
      },
      change(state) {
        state.isActive = !state.isActive;
      },
    },
    actions: {
      async listenToRoomInfo({ commit, state }) {
       
        state.unsubscribeRoomInfo = onSnapshot(collection(db, 'RoomInfo'), (querySnapshot) => {
          const roomInfo = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          commit('SetRoomInfo', roomInfo);
        });
      },
      stopListeningToRoomInfo({ state }) {
       
        state.unsubscribeRoomInfo && state.unsubscribeRoomInfo();
      },
      async personInfo(context) {
        const getEmail = JSON.parse(localStorage.getItem("storedData"));
        const resultMail = query(
          collection(db, "Users"),
          where("Email", "==", getEmail.email)
        );
  
        const userData = await getDocs(resultMail);
  
        userData.forEach((doc) => {
          documentID = doc.id;
  
          context.commit("SetUsers", doc.data());
        });
  
        return userData;
      },
  
      async myQuery(context, payload) {
        // let docRef = query(collection(db, payload.tablo));
  
        // if (payload.kosul) docRef = query(docRef, ...payload.kosul.map(t => where(t.query[0], t.query[1], t.query[2])))
        // if (payload.sirala) docRef = query(docRef, orderBy(payload.sirala, payload.siralaYon != null ? payload.siralaYon : "desc"))
        // if (payload.limit) docRef = query(docRef, limit(payload.limit))
        // if (payload.pagination && !payload.sirala) docRef = query(docRef, orderBy(payload["pagination"]["orderBy"], payload.siralaYon != null ? payload.siralaYon : "desc"), startAt(payload["pagination"]["startAt"]), endAt(payload["pagination"]["endAt"]))
  
        // const docSnap = await getDocs(docRef);
        // // console.log("SONUC", docSnap.docs)
  
        // console.log("PARAMETRELER", payload)
        // if (payload.guncelle) context.commit(payload.guncelle, docSnap.docs.map(p => Object.assign(p.data(), { id: p.id })))
  
        let docRef;
        if (payload.conditionOpt) {
          if (payload.orderOpt) {
            docRef = query(
              collection(db, payload.tableName),
              ...payload.conditionOpt.map((t) =>
                where(t.query[0], t.query[1], t.query[2])
              ),
              orderBy(payload.orderOpt, "asc")
            );
          } else {
            docRef = query(
              collection(db, payload.tableName),
              ...payload.conditionOpt.map((t) =>
                where(t.query[0], t.query[1], t.query[2])
              )
            );
          }
        } else {
          if (payload.orderOpt) {
            docRef = query(
              collection(db, payload.tableName),
              orderBy(payload.orderOpt, "asc")
            );
          } else {
            docRef = query(collection(db, payload.tableName));
          }
        }
        const docSnap = await getDocs(docRef);
        if (payload.updateOpt)
          context.commit(
            payload.updateOpt,
            docSnap.docs.map((p) => Object.assign(p.data(), { id: p.id }))
          );
      },
      async queryRef(context, payload) {
        return await doc(db, payload.tableName, payload.id);
      },
      async sorguDoc(context, payload) {
        const docSnap = await getDoc(payload);
  
        return Object.assign(docSnap.data(), { id: docSnap.id });
      },
      async sorguTable(context, payload) {
        let docRef;
        if (payload.conditionOpt) {
          if (payload.orderOpt) {
            docRef = query(
              collection(db, payload.tableName),
              ...payload.conditionOpt.map((t) =>
                where(t.query[0], t.query[1], t.query[2])
              ),
              orderBy(payload.orderOpt, "asc")
            );
          } else {
            docRef = query(
              collection(db, payload.tableName),
              ...payload.conditionOpt.map((t) =>
                where(t.query[0], t.query[1], t.query[2])
              )
            );
          }
        } else {
          docRef = query(collection(db, payload.tableName));
        }
        const docSnap = await getDocs(docRef);
  
        return docSnap.docs.map((p) => Object.assign(p.data(), { id: p.id }));
      },
      async Operations(context, payload) {
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        const saveDay = new Date();
        //context.dispatch("myQuery", ({ tableName: "Users", orderOpt: "FirstName", updateOpt: "SetUsers", conditionOpt: [{ query: ["UserID", "==", uid] }] }))
        context.dispatch("myQuery", {
          tableName: "Users",
          updateOpt: "SetUsers",
        });
        context.dispatch("myQuery", {
          tableName: "BranchInfo",
          updateOpt: "SetBranchInfo",
        });
        context.dispatch("myQuery", {
          tableName: "Department",
          updateOpt: "SetDepartments",
        });
        context.dispatch("myQuery", {
          tableName: "Agents",
          updateOpt: "SetAgents",
        });
        context.dispatch("myQuery", {
          tableName: "PaymentType",
          updateOpt: "SetPaymentType",
        });
        context.dispatch("myQuery", {
          tableName: "Laundry",
          updateOpt: "SetLaundry",
        });
        context.dispatch("myQuery", {
          tableName: "RoomFeatures",
          updateOpt: "SetRoomFeatures",
        });
        context.dispatch("myQuery", {
          tableName: "RoomTypes",
          updateOpt: "SetRoomTypes",
        });
        context.dispatch("myQuery", {
          tableName: "RoomGroups",
          updateOpt: "SetRoomGroups",
        });
        context.dispatch("myQuery", {
          tableName: "Expenses",
          updateOpt: "SetExpenses",
        });
        context.dispatch("myQuery", {
          tableName: "Stocks",
          updateOpt: "SetStocks",
        });
        context.dispatch("myQuery", {
          tableName: "Reservations",
          updateOpt: "SetReservations",
        });
        context.dispatch("myQuery", {
          tableName: "Guests",
          updateOpt: "SetGuest",
        });
        context.dispatch("myQuery", {
          tableName: "Invoices",
          updateOpt: "SetInvoices",
        });
        context.dispatch("myQuery", {
          tableName: "RoomInfo",
          updateOpt: "SetRoomInfo",
          orderOpt: "Title",
        });
        context.dispatch("myQuery", {
          tableName: "RoomCheck",
          updateOpt: "SetRoomCheck",
        });
        context.dispatch("myQuery", {
          tableName: "CurrencyUnit",
          updateOpt: "SetCurrencyUnit",
        });
        context.dispatch("myQuery", {
          tableName: "LogRecords",
          updateOpt: "SetNotifications",
        });
        context.dispatch("myQuery", {
          tableName: "Citys",
          updateOpt: "SetCitys",
        });
        context.dispatch("myQuery", {
          tableName: "Countries",
          updateOpt: "SetCountries",
        });
        context.dispatch("myQuery", {
          tableName: "Employees",
          updateOpt: "SetEmployees",
        });
        
      },
      async AddDataID(context, payload) {
        try {
          const docRef = await addDoc(
            collection(db, payload.db),
            payload.dataSet
          );
  
          const docID = docRef.id;
  
          payload.dataSet.DocID = docID;
          const data = doc(db, payload.db, docID);
  
          await setDoc(data, payload.dataSet);
          return docID;
        } catch (error) {
          console.error("Doküman eklenirken hata oluştu:", error);
        }
      },
      async AddDataRes(context, payload) {
        const docRef = doc(db, payload.db, payload.documentID);
  
        try {
          await setDoc(docRef, payload.dataSet);
        } catch (error) {
          console.error("Doküman eklenirken hata oluştu:", error);
        }
      },
  
      async AddData(context, payload) {
        addDoc(collection(db, payload.db), payload.dataSet);
      },
      async EditData(context, payload) {
        const data = doc(db, payload.db, payload.id);
        await setDoc(data, payload.data);
      },
      async DeleteData(content, payload) {
        await deleteDoc(doc(db, payload.db, payload.data.id));
      },
      async imageUploadData(context, payload) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          "`Çinili Otel/Dosyalarım/" + payload.name
        );
        const uploadTask = await uploadBytes(storageRef, payload);
        return getDownloadURL(uploadTask.ref);
      },
  
      setLang({ commit }, payload) {
        commit("changeLang", payload);
      },
      async fetchData(context, payload) {
        const uid = JSON.parse(localStorage.getItem("storedData")).userUid;
        const docRef = query(
          collection(db, payload.db),
          where("userID", "==", uid)
        );
        const docSnap = await getDocs(docRef);
        docSnap.forEach((el) => {
          context.commit(
            payload.mt,
            Object.assign(el.data(), {
              id: el.id,
            })
          );
        });
      },
    },
    modules: {
      alert,
      
    },
  });

